import { GatsbyPageContext, SanityDocument } from '@web/shared/types';
import { Series } from '@web/domains/performance/series';
import { Artist, ARTIST_GROUP } from '@web/domains/performance/artist';

import {
    ShowAuthor,
    ShowPromo,
    ShowDetail,
    ShowToggles,
    ShowSponsors,
} from '../../types';

import { SHOW_RATING } from '../../constants';

/**
 * Types for our Digital Program View
 */

export interface ArtistBio {
    role: string;
    artist: Artist;
    _rawBio: any[];
    group: ARTIST_GROUP;
}

export interface DigitalProgramPageProps extends SanityDocument {
    author: ShowAuthor;
    toggles: ShowToggles;
    series: Series;
    runtimeHours: number;
    runtimeMinutes: number;
    intermissionCount: number;
    rating: SHOW_RATING;
    triggerWarning?: string;
    contentAdvisory?: ShowDetail;
    _rawDirectorsNote: any[];
    promo: ShowPromo;
    sponsors: ShowSponsors;
    artists: {
        actors: ArtistBio[];
        crewMembers: ArtistBio[];
        designers: ArtistBio[];
        directors: ArtistBio[];
        shadows: ArtistBio[];
    };
}

export interface DigitalProgramGatsbyContext extends GatsbyPageContext {
    slug__current: string;
    season__slug__current: string;
}
