/**
 * An object for managing SEO at a page level.
 *
 * Allows you to set meta title, description, image, etc.
 */
export const pageSEO = {
    name: 'pageSEO',
    title: 'SEO Config',
    description: 'Optimize this document for search engines',
    type: 'object',
    fields: [
        {
            name: 'hide',
            title: 'Hide Document?',
            description:
                'Do you want to hide this document from search engines?',
            type: 'boolean',
        },
        {
            name: 'title',
            title: 'Meta Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(25).max(70),
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            validation: (Rule: any) => Rule.required().min(50).max(200),
        },
        {
            name: 'image',
            title: 'Meta Image',
            type: 'imageWithAlt',
            options: {
                accept: '.jpg',
            },
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            description:
                'Set a date and time to use for the original creation date of this document.',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
    ],
};
