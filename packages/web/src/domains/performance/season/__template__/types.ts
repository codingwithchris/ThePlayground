import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';

import { Series } from '@web/domains/performance/series';
import { ShowCoreWithCard } from '@web/domains/performance/show';

/**
 * Types for our Single Show Page Template
 */

type ShowsInSeason = ShowCoreWithCard & {
    series: Series;
};

export interface SeasonPageProps extends SanityDocument {
    shows?: ShowsInSeason[];
    tagline?: string;
    description?: string;
}

export interface SeasonPageGatsbyContext extends GatsbyPageContext {
    seasonURL: string;
}
