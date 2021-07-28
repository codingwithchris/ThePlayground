import { isFuture, isPast, parseISO } from 'date-fns';
import { ShowCore } from '../types';

export const filterForFutureShows = <AnyShowType extends ShowCore>(
    shows: AnyShowType[]
): AnyShowType[] =>
    shows.filter(({ closeDate }) => {
        const date = parseISO(closeDate);
        return isFuture(date);
    });

export const filterForPastShows = <AnyShowType extends ShowCore>(
    shows: AnyShowType[]
): AnyShowType[] =>
    shows.filter(({ closeDate }) => {
        const date = parseISO(closeDate);
        return isPast(date);
    });
