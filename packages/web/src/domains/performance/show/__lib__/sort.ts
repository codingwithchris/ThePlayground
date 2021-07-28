import { compareAsc, compareDesc, parseISO } from 'date-fns';
import { ShowCore } from '../types';

/**
 * Sort shows from newest to oldest based on their performance dates
 *
 * @param shows An array of shows to sort
 */
export const sortShowsByDate = <AnyShowType extends ShowCore>(
    shows: AnyShowType[],
    order = 'desc'
): AnyShowType[] =>
    shows.sort((a, b) => {
        const { closeDate: performanceA } = a;
        const { closeDate: performanceB } = b;

        if (!performanceA || !performanceB) {
            return 0;
        }

        const dateA = parseISO(performanceA);
        const dateB = parseISO(performanceB);

        return order === 'desc'
            ? compareDesc(dateA, dateB)
            : compareAsc(dateA, dateB);
    });

/**
 * Sort performances
 */

/**
 * Filter out active shows from archive
 */
