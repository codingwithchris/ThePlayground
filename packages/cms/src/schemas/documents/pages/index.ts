import { schema as homePageSchema } from './home';
import { schema as blogPageSchema } from './blog';
import { schema as archivePageSchema } from './theArchive';

/**
 * The schema configs exported from this file are directly iterated over to build
 * documents as well as the custom UI in Sanity Structure Builder.
 *
 * * This means that the order of the items in the array below
 * * will be used for menu positioning.
 */
export const pageDocuments = [
    homePageSchema,
    blogPageSchema,
    archivePageSchema,
];
