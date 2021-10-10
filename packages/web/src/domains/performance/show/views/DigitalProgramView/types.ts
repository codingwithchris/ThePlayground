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
    ShowPromo,
} from '../../types';
import { SHOW_RATING } from '../../constants';

/**
 * Types for our Single Show Page Template
 */

export interface DigitalProgramPageProps extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityImageData;
    performances: ShowPerformance[];
    season: SeasonReference;
    series: Series;
    runtimeHours: number;
    runtimeMinutes: number;
    intermissionCount: number;
    promo?: ShowPromo;
}

export interface DigitalProgramGatsbyContext extends GatsbyPageContext {
    slug__current: string;
    season__slug__current: string;
}
