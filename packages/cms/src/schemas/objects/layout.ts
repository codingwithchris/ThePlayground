/**
 * An object for managing SEO at a page level.
 *
 * Allows you to set meta title, description, image, etc.
 */
export const pageLayout = {
    name: 'pageLayout',
    title: 'Page Layout',
    description: 'Determines the layout the page will render with.',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'layout',
            title: 'Layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'No Header', value: 'no-header' },
                ],
            },
        },
    ],
    initialValue: {
        layout: 'default',
    },
};
