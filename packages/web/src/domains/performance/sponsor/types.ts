import { SanityImageDataWithAlt } from '@web/shared/types';
import { SPONSOR_TYPE } from './constants';

export interface Sponsor {
    name: string;
    info?: string;
    image?: SanityImageDataWithAlt;
    type: SPONSOR_TYPE;
    link?: string;
    _rawDescription?: any[];
}
