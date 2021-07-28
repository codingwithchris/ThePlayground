import React, { createContext, useContext } from 'react';

import {
    useQueryAllPerformanceData,
    useBuildPerformanceDataMap,
} from './src/hooks';
import { gettersFacade, GettersFacadeMethods } from './src/api';
import { GlobalShowMap, GlobalSeasonMap } from './src/types';

/**
 * Context & Provider
 */
export const GlobalPerformanceContext = createContext(
    {} as GlobalPerformanceContextProps
);

/**
 * Provides global performance (Season and Show) data along with a set of
 * simple yet powerful data operators for getting the data we need where and when
 * we need it.
 *
 * The goal here is to fetch data once, create a single instance of operators, and
 * only operate on the data once when needed. In this way it acts as a sort of Singleton
 * for data we need globally.
 */
export const GlobalPerformanceProvider: React.FC = ({ children }) => {
    const { rawSeasonsData, rawShowsData } = useQueryAllPerformanceData();
    const { seasons, shows } = useBuildPerformanceDataMap(
        rawSeasonsData,
        rawShowsData
    );

    const context: GlobalPerformanceContextProps = {
        shows,
        seasons,
        get: gettersFacade(shows, seasons),
    };

    return (
        <GlobalPerformanceContext.Provider value={context}>
            {children}
        </GlobalPerformanceContext.Provider>
    );
};

interface GlobalPerformanceContextProps {
    seasons: GlobalSeasonMap;
    shows: GlobalShowMap;
    get: GettersFacadeMethods;
}

/**
 * A simple hook for accessing our context without having to import a bunch of stuff each time
 */
export const useGlobalPerformanceContext = (): GlobalPerformanceContextProps =>
    useContext(GlobalPerformanceContext);

export type {
    ShowMapEntry,
    SeasonMapEntry,
    GlobalSeasonMap,
    GlobalShowMap,
} from './src/types';
