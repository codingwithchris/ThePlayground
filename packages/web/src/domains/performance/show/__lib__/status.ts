import { zonedTimeToUtc } from 'date-fns-tz';
import { parseISO, sub, isPast, isWithinInterval, isValid } from 'date-fns';
import { DEFAULT_TIMEZONE, SHOW_STATUS } from '../constants';

const now = zonedTimeToUtc(new Date(), DEFAULT_TIMEZONE);

/**
 * Determine if the show is in the past
 *
 * @param lastPerformance The date of the first performance
 * @returns
 */
export const isPastShow = (lastPerformance: Date) => {
    return isPast(lastPerformance);
};

/**
 * Determine if the show is active, meaning it is currently running ("now playing")
 */
export const isActiveShow = (firstPerformance: Date, lastPerformance: Date) => {
    const interval = {
        start: firstPerformance,
        end: lastPerformance,
    };
    return isWithinInterval(now, interval);
};

/**
 * Determine if the show is "coming soon" meaning it will be opening soon
 */
export const isComingSoonShow = (
    firstPerformance: Date,
    lastPerformance: Date
) => {
    // How many days before a show opens should we consider a show "upcoming"?
    const COMING_SOON_WINDOW_DAYS = 60;
    // How many hours before a show officially opens should we still consider it "upcoming" instead of "now playing"?
    const COMING_SOON_CUTOFF_HOURS = 12;

    const interval = {
        start: sub(firstPerformance, {
            days: COMING_SOON_WINDOW_DAYS,
        }),
        end: sub(lastPerformance, { days: COMING_SOON_CUTOFF_HOURS }),
    };

    return isWithinInterval(now, interval);
};

/**
 * Determine the status of a show using the open and close dates
 *
 * @param openDate The opening performance datetime
 * @param closeDate The closing performance datetime
 */
export const getShowStatus = (openDate?: string, closeDate?: string) => {
    // If no performances are passed in, bail.
    if (!openDate || !closeDate) {
        return SHOW_STATUS.DEFAULT;
    }

    // Format the open & closing date string as Date objects
    const firstPerformance = parseISO(openDate);
    const lastPerformance = parseISO(closeDate);

    // Check to see if our parsed Date objects are valid
    if (!isValid(firstPerformance) || !isValid(lastPerformance)) {
        return SHOW_STATUS.DEFAULT;
    }

    if (isPastShow(lastPerformance)) return SHOW_STATUS.PAST;
    if (isActiveShow(firstPerformance, lastPerformance))
        return SHOW_STATUS.ACTIVE;
    if (isComingSoonShow(firstPerformance, lastPerformance))
        return SHOW_STATUS.COMING_SOON;

    return SHOW_STATUS.FUTURE;
};
