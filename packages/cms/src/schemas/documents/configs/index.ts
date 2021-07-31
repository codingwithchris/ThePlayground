import { schema as companyConfigSchema } from './companyConfig';
import { schema as componentConfigSchema } from './componentConfig';
import { schema as linkManifestConfigSchema } from './linkManifestConfig';
import { schema as siteConfigSchema } from './siteConfig';
import { schema as seoConfigSchema } from './seoConfig';

/**
 * The schema configs exported from this file are directly iterated over to build
 * documents as well as the custom UI in Sanity Structure Builder.
 *
 * * This means that the order of the items in the array below
 * * will be used for menu positioning.
 */
export const configDocuments = [
    siteConfigSchema,
    companyConfigSchema,
    seoConfigSchema,
    linkManifestConfigSchema,
    componentConfigSchema,
];
