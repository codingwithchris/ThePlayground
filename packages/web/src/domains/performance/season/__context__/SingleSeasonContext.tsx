import React, { createContext, useContext } from 'react';
import {
    useGlobalPerformanceContext,
    SeasonMapEntry,
} from '@web/shared/context';

export const SingleSeasonContext = createContext(
    {} as SingleSeasonContextProps
);

export const SingleSeasonProvider: React.FC<SingleSeasonProviderProps> = ({
    slug,
    children,
}) => {
    const { get } = useGlobalPerformanceContext();
    const [next, previous] = get.seasonNeighbors(slug);

    const context: SingleSeasonContextProps = {
        currentSeason: get.season(slug),
        nextSeason: next(),
        previousSeason: previous(),
    };

    console.log(context);

    return (
        <SingleSeasonContext.Provider value={context}>
            {children}
        </SingleSeasonContext.Provider>
    );
};

interface SingleSeasonProviderProps {
    slug: string;
}

interface SingleSeasonContextProps {
    currentSeason: SeasonMapEntry | undefined;
    nextSeason: SeasonMapEntry | undefined;
    previousSeason: SeasonMapEntry | undefined;
}

export const useSingleSeasonContext = (): SingleSeasonContextProps =>
    useContext(SingleSeasonContext);
