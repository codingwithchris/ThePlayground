import { isFuture, isPast, parseISO } from 'date-fns';
import { Show } from '../types';

export const filterForFutureShows = <AnyShowType extends Show>(
    shows: AnyShowType[]
): AnyShowType[] =>
    shows.filter(({ closeDate }) => {
        const date = parseISO(closeDate);
        return isFuture(date);
    });

export const filterForPastShows = <AnyShowType extends Show>(
    shows: AnyShowType[]
): AnyShowType[] =>
    shows.filter(({ closeDate }) => {
        const date = parseISO(closeDate);
        return isPast(date);
    });
