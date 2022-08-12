export const navItem = {
    name: 'navItem',
    title: 'Navigation item',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'Internal Link',
            name: 'internalLink',
            description: 'Select a document for navigation',
            type: 'reference',
            to: [
                // { type: 'page' },
                { type: 'season' },
                { type: 'show' },
                { type: 'post' },
                { type: 'blogPage' },
                { type: 'archivePage' },
            ],
        },
        {
            title: 'Visual Priority?',
            name: 'visualPriority',
            description:
                'Give this link a higher visual priority (use sparingly)',
            type: 'boolean',
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: 'name',
            priority: 'visualPriority',
        },
        prepare({ title, priority }: any) {
            return {
                title,
                subtitle: priority ? 'has visual priority' : '',
            };
        },
    },
};

export const headerNav = {
    name: 'headerNav',
    title: 'Header Navigation',
    type: 'object',
    fields: [
        {
            name: 'primaryItems',
            type: 'array',
            title: 'Primary Navigation Items',
            description:
                'These nav items are the most important and will be visible whenever possible (top -> bottom = left -> right)',
            of: [{ type: 'navItem' }],
        },
        {
            name: 'secondaryItems',
            type: 'array',
            title: 'Secondary Navigation Items',
            description:
                'These nav items are lower in priority and could be hidden when needed. (top -> bottom = left -> right)',
            of: [{ type: 'navItem' }],
        },
    ],
};

export const footerNav = {
    name: 'footerNav',
    title: 'Footer Navigation',
    type: 'object',
    fields: [
        {
            name: 'group1',
            type: 'array',
            title: 'Group 1 - Navigation Items',
            description:
                '(this group is being left general because the footer structure is subject to change)',
            of: [{ type: 'navItem' }],
        },
        {
            name: 'group2',
            type: 'array',
            title: 'Group 2 - Navigation Items',
            description:
                '(this group is being left general because the footer structure is subject to change)',
            of: [{ type: 'navItem' }],
        },
    ],
};
