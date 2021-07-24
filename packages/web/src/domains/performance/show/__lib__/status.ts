import { parseISO, sub, isPast, isWithinInterval, isValid } from 'date-fns';

enum STATUS {
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    FUTURE = 'future',
    PAST = 'archived',
    UPCOMING = 'upcoming',
    DEFAULT = 'unknown',
}

/**
 * Determine the status of a show using the open and close dates
 *
 * @param openDate The opening performance datetime
 * @param closeDate The closing performance datetime
 */
export const getShowStatus = (
    openDate?: string,
    closeDate?: string
): ShowStatus => {
    // If no performances are passed in, bail.
    if (!openDate || !closeDate) {
        return STATUS.DEFAULT;
    }

    // Format the open & closing date string as Date objects
    const firstPerformance = parseISO(openDate);
    const lastPerformance = parseISO(closeDate);

    // Check to see if our parsed Date objects are valid
    if (!isValid(firstPerformance) || !isValid(lastPerformance)) {
        return STATUS.DEFAULT;
    }

    // How long before a show opens should we consider a show "upcoming"?
    const upcomingWindowStart = sub(firstPerformance, { days: 30 });
    const now = new Date();

    const INTERVALS = {
        // The full date range of a production
        PRODUCTION: {
            start: firstPerformance,
            end: lastPerformance,
        },
        // The window of time where a show should be considered "coming soon"
        COMING_SOON: {
            start: upcomingWindowStart,
            end: sub(firstPerformance, { hours: 1 }),
        },
    };

    if (isPast(lastPerformance)) return STATUS.PAST;
    if (isWithinInterval(now, INTERVALS.PRODUCTION)) return STATUS.ACTIVE;
    if (isWithinInterval(now, INTERVALS.COMING_SOON)) return STATUS.UPCOMING;

    return STATUS.FUTURE;
};

export type ShowStatus =
    | 'unknown'
    | 'archived'
    | 'active'
    | 'upcoming'
    | 'future'
    | 'cancelled';
