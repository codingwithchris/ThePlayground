import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';
import { Series } from '@web/domains/performance/series';
import { TicketProvider } from '@web/domains/performance/ticketProvider';
import { Location } from '@web/domains/performance/location';

import {
    ShowAuthor,
    ShowPerformance,
    ShowDetail,
    ShowNotice,
    ShowToggles,
    ShowPromo,
} from '../../types';
import { SHOW_RATING } from '../../constants';

/**
 * Types for our Single Show View
 */

export interface ShowPageProps extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityImageData;
    thumbnailImage: SanityImageDataWithAlt;
    performances: ShowPerformance[];
    season: SeasonReference;
    series: Series;
    toggles: ShowToggles;
    location: Location;
    _rawDescription: any[];
    openDate: string;
    closeDate: string;
    runtimeHours: number;
    runtimeMinutes: number;
    intermissionCount: number;
    rating: SHOW_RATING;
    triggerWarning?: string;
    contentAdvisory?: ShowDetail;
    effectsAdvisory?: ShowDetail;
    ticketProvider?: TicketProvider;
    generalTicketLink?: string;
    healthNotice?: ShowNotice;
    promo?: ShowPromo;
}

export interface ShowPageGatsbyContext extends GatsbyPageContext {
    slug__current: string;
    season__slug__current: string;
}
