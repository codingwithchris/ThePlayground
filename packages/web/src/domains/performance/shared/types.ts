import { DecoratedShow, Show } from '../show/types';
import { DecoratedSeason, Season } from '../season/types';

/**
 * ==============================================================
 * SHARED PERFORMANCE TYPES
 * ==============================================================
 */
export interface SeasonWithShows extends Season {
    shows: Show[];
}

export interface DecoratedSeasonWithShows extends DecoratedSeason {
    shows: DecoratedShow[];
}
