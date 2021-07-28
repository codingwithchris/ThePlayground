import { ShowCore } from '../show/types';
import { SeasonCore } from '../season/types';

/**
 * ==============================================================
 * SHARED PERFORMANCE TYPES
 * ==============================================================
 */
export interface SeasonCoreWithShows extends SeasonCore {
    shows: ShowCore[];
}
