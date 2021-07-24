import React, { createContext, useContext } from 'react';
import { useGlobalPerformanceContext, ShowMapEntry } from '@web/shared/context';
import { getShowStatus, ShowStatus } from '../__lib__';

export const SingleShowContext = createContext({} as SingleShowContextProps);

export const SingleShowProvider: React.FC<SingleShowProviderProps> = ({
    slug,
    openDate,
    closeDate,
    children,
}) => {
    const { get } = useGlobalPerformanceContext();
    const [next, previous] = get.showNeighbors(slug);

    const context: SingleShowContextProps = {
        currentShow: get.show(slug),
        showStatus: getShowStatus(openDate, closeDate),
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
    openDate?: string;
    closeDate?: string;
}

interface SingleShowContextProps {
    currentShow: ShowMapEntry | undefined;
    showStatus: ShowStatus;
    nextShow: ShowMapEntry | undefined;
    previousShow: ShowMapEntry | undefined;
}

export const useSingleShowContext = (): SingleShowContextProps =>
    useContext(SingleShowContext);
