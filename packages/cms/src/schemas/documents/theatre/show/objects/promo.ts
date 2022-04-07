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

export const soundtrack = {
    title: 'Soundtrack',
    name: 'soundtrack',
    type: 'object',
    fields: [
        {
            name: 'provider',
            title: 'Provider',
            type: 'string',
            options: {
                layout: 'dropdown',
                list: [{ title: 'Spotify', value: 'spotify' }],
            },
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
            scheme: 'https',
            allowRelative: false,
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
        {
            type: 'soundtrack',
            name: 'soundtrack',
        },
    ],
};
