import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';

import { ShowAuthor, ShowPerformance } from '../types';

/**
 * Types for our Single Show Page Template
 */

export interface ShowPageProps extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityImageData;
    thumbnailImage: SanityImageDataWithAlt;
    performances: ShowPerformance[];
    season: SeasonReference;
    openDate: string;
    closeDate: string;
}

export interface ShowPageGatsbyContext extends GatsbyPageContext {
    seasonID: string;
    seasonSlug: string;
    seasonURL: string;
}
