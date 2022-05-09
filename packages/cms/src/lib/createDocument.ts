import { DOCUMENT_ACTIONS } from '../constants';
import {
    DocumentActions,
    CreatePageDocument,
    CreateConfigDocument,
    CreateDocumentCollection,
    CreateDocumentReturn,
} from '../types';

/**
 * Allows for easy disabling of Sanity __experimental_actions in documents.
 *
 * * By default, we assume you want all document actions: ['create', 'update', 'publish', 'delete'].
 * * By passing in an array of actions to disable, you can "toggle off" any undesired actions.
 *
 * @param disabledActions An array of actions to disable
 */
const getDocumentActions = (
    disabledActions: Partial<DocumentActions>
): Partial<DocumentActions> => {
    return DOCUMENT_ACTIONS.filter(
        (action) => !disabledActions.includes(action)
    );
};

/**
 * Retrieves the IDs and Titles of an array of created documents
 */
export const getCreatedDocumentMeta = (documents: CreateDocumentReturn[]) =>
    documents.map((schema) => [schema.ID, schema.TITLE]);

/**
 * Retrieves the IDs of an array of created documents
 */
export const getCreatedDocumentIDs = (documents: CreateDocumentReturn[]) =>
    documents.map((schema) => schema.ID);

/**
 * A factory function to assist with templating out new single page documents.
 * IE: 'home page', 'blog page' etc.
 *
 * * Not only does it dry out code and help standardize schema options,
 * * it returns the document ID and Title in addition to the fully hydrated schema.
 */
export const createPageDocument: CreatePageDocument = ({
    name,
    title,
    icon,
    disabledActions = [],
    maxSlugLength = 50,
    fieldsets,
    groups,
    fields,
}) => {
    const schema = {
        name,
        title,
        icon: () => icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fieldsets: fieldsets ? [...fieldsets] : [],
        groups: groups
            ? [...groups, { name: 'seo', title: 'SEO' }]
            : [{ name: 'seo', title: 'SEO' }],
        fields: [
            {
                name: 'title',
                title: 'Page Title',
                type: 'string',
                validation: (Rule: any) => Rule.required(),
            },
            {
                name: 'slug',
                title: 'Page Slug',
                type: 'slug',
                options: {
                    source: 'title',
                    slugify: (input: string): string =>
                        input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, maxSlugLength),
                },
                validation: (Rule: any) => Rule.required(),
            },
            ...fields,
            {
                name: 'seo',
                title: 'SEO',
                type: 'pageSEO',
                group: 'seo',
            },
        ],
        seo: {
            hideDocument: false,
            publishedAt: new Date().toISOString(),
        },
        preview: {
            select: {
                title: 'title',
                subtitle: 'slug.current',
                media: 'seo.image',
            },
            prepare({ title, subtitle, media }: any) {
                return {
                    title,
                    subtitle: subtitle === 'home' ? '' : subtitle,
                    media,
                };
            },
        },
    };

    return { ID: name, TITLE: title, schema };
};

/**
 * A factory function to assist with templating out new document collections.
 * IE: 'seasons', 'shows' etc.
 *
 * * Not only does it dry out code and help standardize schema options,
 * * it returns the document ID and Title in addition to the fully hydrated schema.
 */
export const createDocumentCollection: CreateDocumentCollection = ({
    name,
    title,
    icon,
    disabledActions = [],
    disableSEO = false,
    fieldsets,
    groups,
    fields,
    initialValue,
    preview,
    orderings,
}) => {
    const schema = {
        name,
        title,
        icon: () => icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fieldsets: fieldsets ? [...fieldsets] : [],
        groups: groups
            ? [...groups, { name: 'seo', title: 'SEO' }]
            : [{ name: 'seo', title: 'SEO' }],
        fields: disableSEO
            ? [...fields]
            : [
                  ...fields,
                  {
                      name: 'seo',
                      title: 'SEO',
                      type: 'pageSEO',
                      group: 'seo',
                  },
              ],
        initialValue,
        preview,
        orderings,
    };

    return { ID: name, TITLE: title, schema };
};

/**
 * A factory function to assist with templating out new configuration document.
 * IE: 'site config', 'company config' etc.
 *
 * * Not only does it dry out code and help standardize schema options,
 * * it returns the document ID and Title in addition to the fully hydrated schema.
 *
 */
export const createConfigDocument: CreateConfigDocument = ({
    name,
    title,
    icon,
    disabledActions = [],
    fields,
}) => {
    const schema = {
        name,
        title,
        icon: () => icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fields: [...fields],
    };

    return { ID: name, TITLE: title, schema };
};
