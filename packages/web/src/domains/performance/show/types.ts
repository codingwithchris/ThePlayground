import { SanityImageDataWithAlt } from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';
import {
    SHOW_STATUS,
    PERFORMANCE_TICKET_TYPE,
    PERFORMANCE_STATUS,
} from './constants';

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
    status?: SHOW_STATUS;
    number?: number;
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

export interface ShowTickets {
    type: PERFORMANCE_TICKET_TYPE;
    externalLink?: string;
    price?: number;
}

export interface ShowPerformance {
    datetime: string;
    status: PERFORMANCE_STATUS;
    isPreview: boolean;
    isPWYW: boolean;
    hasTalkback: boolean;
    tickets?: ShowTickets;
}

export interface ShowDetail {
    copy?: string;
    hasModal?: boolean;
    modalTriggerText?: string;
    _rawModalContent?: any[];
}

export interface ShowNotice {
    shouldDisplay: boolean;
    title: string;
    _rawContent: any[];
}
