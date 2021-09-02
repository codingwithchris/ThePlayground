import { getNextArrayItem, getPreviousArrayItem } from '@web/shared/utils';
import {
    ShowMapEntry,
    SeasonMapEntry,
    GlobalShowMap,
    GlobalSeasonMap,
} from './types';

/**
 * Get an individual Show
 *
 */
const getShow = (showsMap: GlobalShowMap) => (slug: string) => {
    // TODO: Surface error for undefined scenario
    return showsMap.get(slug);
};

/**
 * Get an individual Season
 */
const getSeason = (seasonsMap: GlobalSeasonMap) => (slug: string) => {
    // TODO: Surface error for undefined scenario
    return seasonsMap.get(slug);
};

/**
 * Get all of the Shows that exist in a single Season
 */
const getAllShowsInSeason = (season?: SeasonMapEntry) => {
    return season?.shows;
};

/**
 * Get all the shows in a single Season with exception of the provided Show
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
 * Get the PREVIOUS or NEXT references of Seasons or Shows in relation
 * to the provided Season or Show entry.
 */
const getPerformanceNeighbors =
    <T>(dataMap: Map<string, T>) =>
    (startingFromEntry: string) => {
        const dataArray = [...dataMap];
        const currentIndex = dataArray.findIndex(
            ([slug]) => slug === startingFromEntry
        );

        /**
         * Because we sort our shows descending (from most recent show to oldest),
         * we actually need to traverse UP the array by getting the previous array
         * item to get the NEXT (more recent) show.
         *
         * * NOTE: because we are operating on a Map, the returned value will be
         * *  a tuple of [key, data], so we use [1] to get the data.
         */
        const next = () => {
            return getNextArrayItem(dataArray, currentIndex)?.[1];
        };

        /**
         * Because we sort our shows descending (from most recent show to oldest),
         * we actually need to traverse DOWN the array by getting the next array
         * item to get the PREVIOUS (older) show.
         *
         * * NOTE: because we are operating on a Map, the returned value will be
         * * a tuple of [key, data], so we use [1] to get the data.
         */
        const previous = () => {
            return getPreviousArrayItem(dataArray, currentIndex)?.[1];
        };

        return { next, previous };
    };

/**
 * Contains all publicly exposed methods of our API
 *
 * @param shows A javascript Map of every Show we've ever done with the key as the Show slug
 * @param seasons A javascript Map of every Season we've ever done with the key as the Season slug
 *
 * @returns An object of publicly exposed methods for operating on our season and show data.
 */
export const gettersFacade = (
    shows: GlobalShowMap,
    seasons: GlobalSeasonMap
) => ({
    show: getShow(shows),
    showCount: shows.size,
    season: getSeason(seasons),
    seasonCount: seasons.size,
    allShowsInSeason: (seasonSlug: string) =>
        getAllShowsInSeason(getSeason(seasons)(seasonSlug)),
    otherShowsInSeason: (seasonSlug: string, showSlug: string) =>
        getOtherShowsInSeason(
            getSeason(seasons)(seasonSlug)?.shows,
            getShow(shows)(showSlug)
        ),
    showNeighbors: getPerformanceNeighbors(shows),
    seasonNeighbors: getPerformanceNeighbors(seasons),
});

export type GettersFacadeMethods = ReturnType<typeof gettersFacade>;
