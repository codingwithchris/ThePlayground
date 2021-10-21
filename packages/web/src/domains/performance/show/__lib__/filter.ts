import { zonedTimeToUtc } from 'date-fns-tz';
import { isFuture, isPast } from 'date-fns';
import { DEFAULT_TIMEZONE } from '../constants';
import { Show } from '../types';

export const filterForFutureShows = <AnyShowType extends Show>(
    shows: AnyShowType[]
): AnyShowType[] =>
    shows.filter(({ closeDate }) => {
        const date = zonedTimeToUtc(closeDate, DEFAULT_TIMEZONE);
        return isFuture(date);
    });

export const filterForPastShows = <AnyShowType extends Show>(
    shows: AnyShowType[]
): AnyShowType[] =>
    shows.filter(({ closeDate }) => {
        const date = zonedTimeToUtc(closeDate, DEFAULT_TIMEZONE);
        return isPast(date);
    });
