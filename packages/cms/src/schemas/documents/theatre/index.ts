import { schema as locationSchema } from './location';
import { schema as artistSchema } from './artist';

import { schema as showSchema, objects as showObjects } from './show';
import { schema as seasonSchema } from './season';
import { schema as organizationSchema } from './organization';
import { schema as seriesSchema } from './series';
import { schema as ticketProviderSchema } from './ticketProvider';
import { schema as sponsorSchema } from './sponsor';

export const theatreDocuments = [
    artistSchema,
    locationSchema,
    organizationSchema,
    ticketProviderSchema,
    seriesSchema,
    showSchema,
    seasonSchema,
    sponsorSchema,
];

export const theatreObjects = [...showObjects];
