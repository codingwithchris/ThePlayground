export const sponsors = {
    name: 'showSponsors',
    title: 'Sponsors',
    description: 'Sponsors and supporters of this show.',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'sponsors',
            title: 'Sponsors',
            description:
                'Sponsors who committed to a specific level of sponsorship',
            type: 'array',
            of: [{ type: 'sponsorReference' }],
        },
        {
            name: 'highlights',
            title: 'Sponsor Highlights',
            description:
                'Special sponsor callouts for sponsors we need to call extra attention to',
            type: 'array',
            of: [{ type: 'sponsorHighlight' }],
        },
        {
            name: 'specialThanks',
            title: 'Special Thanks',
            description:
                'Special thanks for donations or assistance that don\'t fall into typical "sponsorship" levels.',
            type: 'contentBlock',
        },
    ],
};
