import { SanityImageDataWithAlt } from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';

/**
 * Core data for a show that we may want to use for any component
 */
export interface ShowCore {
    title: string;
    slug: {
        current: string;
    };
    season: SeasonReference;
    author: ShowAuthor;
    openDate: string;
    closeDate: string;
    // In some instances, we will want the full path to the show to be available so we can easily allow navigation directly to it
    path?: string;
    status?: ShowStatus;
}

export interface ShowPosterImage {
    posterImage: SanityImageDataWithAlt;
}
export interface ShowCardImage {
    cardImage: SanityImageDataWithAlt;
}

export interface ShowThumbnailImage {
    thumbnailImage: SanityImageDataWithAlt;
}

export type ShowCoreWithPoster = ShowCore & ShowPosterImage;
export type ShowCoreWithCard = ShowCore & ShowCardImage;
export type ShowCoreWithThumbnail = ShowCore & ShowThumbnailImage;
export type ShowCoreWithImages = ShowCore &
    ShowCardImage &
    ShowPosterImage &
    ShowThumbnailImage;

/**
 * Metadata associated with a show.
 */
export interface ShowAuthor {
    name: string;
    bioLink?: string;
    scriptLink?: string;
}

export interface ShowPerformance {
    datetime: string;
    status: 'active' | 'cancelled';
    isPreview: boolean;
    isPayWhatYouCan: boolean;
    hasTalkback: boolean;
}

export type ShowStatus =
    | 'unknown'
    | 'archived'
    | 'active'
    | 'coming-soon'
    | 'future'
    | 'cancelled';
