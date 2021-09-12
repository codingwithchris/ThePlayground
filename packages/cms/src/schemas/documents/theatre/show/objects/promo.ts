export const trailer = {
    title: 'Trailer',
    name: 'trailer',
    type: 'object',
    fields: [
        {
            name: 'videoID',
            title: 'Video ID',
            type: 'string',
        },
        {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                layout: 'dropdown',
                list: [{ title: 'Youtube', value: 'youtube' }],
            },
        },
        {
            title: 'Credit',
            name: 'credit',
            type: 'reference',
            to: [{ type: 'organization' }],
        },
        {
            title: "Credit's Role",
            name: 'creditRole',
            description: 'How did the credited organization help?',
            type: 'string',
        },
    ],
};

export const promo = {
    name: 'promo',
    title: 'Promo',
    type: 'object',
    options: { collapsible: true, collapsed: true },
    description: 'Promo material for this show',
    fields: [
        {
            type: 'trailer',
            name: 'trailer',
        },
    ],
};
