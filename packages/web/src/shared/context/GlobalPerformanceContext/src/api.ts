import { getNextArrayItem, getPreviousArrayItem } from '@web/shared/utils';
import {
    ShowMapEntry,
    SeasonMapEntry,
    GlobalShowMap,
    GlobalSeasonMap,
} from './types';

/**
 *
 * @param showsMap
 * @returns
 */
const getShow = (showsMap: GlobalShowMap) => (slug: string) => {
    return showsMap.get(slug);
};

/**
 *
 * @param seasonsMap
 * @returns
 */
const getSeason = (seasonsMap: GlobalSeasonMap) => (slug: string) => {
    return seasonsMap.get(slug);
};

/**
 *
 * @param season
 * @returns
 */
const getAllShowsInSeason = (season?: SeasonMapEntry) => {
    return season?.shows;
};

/**
 *
 * @param showsInSeason
 * @param showToExclude
 * @returns
 */
const getOtherShowsInSeason = (
    showsInSeason?: ShowMapEntry[],
    showToExclude?: ShowMapEntry
) => {
    return showsInSeason?.filter(
        ({ slug }) => slug.current !== showToExclude?.slug.current
    );
};

/**
 * Get the previous and next references for seasons or shows
 */
const getPerformanceNeighbors =
    <T>(dataMap: Map<string, T>) =>
    (startFromShow: string) => {
        const dataArray = [...dataMap];
        const currentIndex = dataArray.findIndex(
            ([slug]) => slug === startFromShow
        );

        const next = () => {
            // Because we sort our shows descending (from most recent show to oldest),
            // we actually need to traverse UP the array to get the NEXT show.
            return getPreviousArrayItem(dataArray, currentIndex)?.[1];
        };
        const previous = () => {
            // Because we sort our shows descending (from most recent show to oldest),
            // we actually need to traverse DOWN the array to get the PREVIOUS show.
            return getNextArrayItem(dataArray, currentIndex)?.[1];
        };

        return [next, previous];
    };

/**
 * Contains all publicly exposed methods of our API
 *
 * @param shows
 * @param seasons
 * @returns An object of publicly exposed methods for operating on our season and show data
 */
export const gettersFacade = (
    shows: GlobalShowMap,
    seasons: GlobalSeasonMap
) => ({
    show: getShow(shows),
    showCount: shows.size,
    season: getSeason(seasons),
    seasonCount: seasons.size,
    allShowsInSeason: (slug: string) =>
        getAllShowsInSeason(getSeason(seasons)(slug)),
    otherShowsInSeason: (seasonSlug: string, showSlug: string) =>
        getOtherShowsInSeason(
            getSeason(seasons)(seasonSlug)?.shows,
            getShow(shows)(showSlug)
        ),
    showNeighbors: getPerformanceNeighbors(shows),
    seasonNeighbors: getPerformanceNeighbors(seasons),
});

export type GettersFacadeMethods = ReturnType<typeof gettersFacade>;
