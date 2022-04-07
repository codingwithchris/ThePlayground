export const sponsorReference = {
    name: 'sponsorReference',
    title: 'Sponsor Reference',
    type: 'object',
    fields: [
        {
            name: 'level',
            type: 'string',
            options: {
                list: [
                    { title: '#BeGritty', value: 'beGritty' },
                    { title: '#BeBold', value: 'beBold' },
                    { title: '#BeGutsy', value: 'beGutsy' },
                    { title: '#BeAudacious', value: 'beAudacious' },
                ],
            },
        },
        {
            type: 'reference',
            name: 'sponsor',
            to: { type: 'sponsor' },
        },
    ],
    preview: {
        select: {
            name: 'sponsor.name',
            level: 'sponsor.level',
        },
        prepare({ name, level }: any) {
            return {
                title: name,
                subtitle: level,
            };
        },
    },
};

export const sponsors = {
    name: 'showSponsors',
    title: 'Sponsors',
    description: '',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'sponsors',
            title: 'Sponsors',
            type: 'array',
            of: [{ type: 'sponsorReference' }],
        },
    ],
};
