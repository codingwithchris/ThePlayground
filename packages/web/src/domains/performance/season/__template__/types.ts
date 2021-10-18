import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';

import { Show } from '@web/domains/performance/show';

/**
 * Types for our Single Season Page Template
 */
export interface SeasonPageProps extends SanityDocument {
    shows?: Show[];
    tagline?: string;
    description?: string;
}

export interface SeasonPageGatsbyContext extends GatsbyPageContext {
    slug__current: string;
}
