import { simpleInternalAction, simpleExternalAction } from './actions';

import { address } from './address';

import { singleIcon } from './icons';

import { imageWithAlt, imageWithFullMeta } from './images';

import {
    internalPostLink,
    internalSeasonLink,
    internalShowLink,
    internalLink,
    externalLink,
} from './links';

import { pageSEO } from './seo';
import { pageLayout } from './layout';

import { contentBlock } from './blocks';

import { components } from './components';

export default [
    address,
    imageWithAlt,
    imageWithFullMeta,
    internalPostLink,
    internalSeasonLink,
    internalShowLink,
    internalLink,
    externalLink,
    pageSEO,
    pageLayout,
    contentBlock,
    simpleInternalAction,
    simpleExternalAction,
    singleIcon,
    ...components,
];
