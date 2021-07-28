import { GatsbyPageContext, SanityDocument } from '@web/shared/types';

export interface SeasonReference {
    slug: {
        current: string;
    };
    title?: string;
    // In some instances, we will want the full path to the season to be available
    path?: string;
}

export interface SeasonCore {
    slug: {
        current: string;
    };
    title: string;
    tagline: string;
    // In some instances, we will want the full path to the season to be available
    path?: string;
}

export interface SeasonPage extends SanityDocument {
    tagline: string;
    description: string;
}

export interface SeasonPageContext extends GatsbyPageContext {
    seasonURL: string;
}
