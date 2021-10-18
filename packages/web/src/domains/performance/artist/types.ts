import { SanityImageDataWithFullMeta } from '@web/shared/types';
import { ARTIST_PRONOUNS } from './constants';

export interface Artist {
    firstName: string;
    middleName?: string;
    lastName: string;
    pronouns: ARTIST_PRONOUNS;
    headshot: SanityImageDataWithFullMeta;
    instagram: string;
    website?: string;
}
