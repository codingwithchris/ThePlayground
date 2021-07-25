import React, { createContext, useContext } from 'react';
import { useGlobalPerformanceContext, ShowMapEntry } from '@web/shared/context';

export const SingleShowContext = createContext({} as SingleShowContextProps);

export const SingleShowProvider: React.FC<SingleShowProviderProps> = ({
    slug,
    children,
}) => {
    const { get } = useGlobalPerformanceContext();
    const [next, previous] = get.showNeighbors(slug);

    const context: SingleShowContextProps = {
        currentShow: get.show(slug),
        nextShow: next(),
        previousShow: previous(),
    };

    console.log(context);

    return (
        <SingleShowContext.Provider value={context}>
            {children}
        </SingleShowContext.Provider>
    );
};

interface SingleShowProviderProps {
    slug: string;
}

interface SingleShowContextProps {
    currentShow: ShowMapEntry | undefined;
    nextShow: ShowMapEntry | undefined;
    previousShow: ShowMapEntry | undefined;
}

export const useSingleShowContext = (): SingleShowContextProps =>
    useContext(SingleShowContext);
