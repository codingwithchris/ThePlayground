import { zonedTimeToUtc } from 'date-fns-tz';
import { compareAsc, compareDesc, parseISO, isPast } from 'date-fns';
import { DEFAULT_TIMEZONE } from '../constants';
import { Show, ShowPerformance } from '../types';

/**
 * Sort shows from newest to oldest based on their performance dates
 *
 * @param shows An array of shows to sort
 */
export const sortShowsByDate = <AnyShowType extends Show>(
    shows: AnyShowType[],
    order = 'desc'
): AnyShowType[] =>
    shows.sort((a, b) => {
        const { closeDate: performanceA } = a;
        const { closeDate: performanceB } = b;

        if (!performanceA || !performanceB) {
            return 0;
        }

        const dateA = zonedTimeToUtc(performanceA, DEFAULT_TIMEZONE);
        const dateB = zonedTimeToUtc(performanceB, DEFAULT_TIMEZONE);

        return order === 'desc'
            ? compareDesc(dateA, dateB)
            : compareAsc(dateA, dateB);
    });

/**
 * Sort performances
 *
 * Sort past performances to the end of the array
 */
export const sortPastPerformancesToEnd = (
    performances: ShowPerformance[]
): ShowPerformance[] =>
    performances.sort((a, b) => {
        const { datetime: performanceA } = a;
        const { datetime: performanceB } = b;

        const dateA = zonedTimeToUtc(performanceA, DEFAULT_TIMEZONE);
        const dateB = zonedTimeToUtc(performanceB, DEFAULT_TIMEZONE);

        // If the first date is not in the past, but the second date is, sort the past date last (moving them to the end of the array)
        if (!isPast(dateA) && isPast(dateB)) {
            return -1;
        }

        return 0;
    });

/**
 * Filter out active shows from archive
 */
