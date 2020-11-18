export const legacyOptions = {
    name: 'legacy',
    title: 'Legacy Options',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'url',
            title: 'Legacy URL',
            description: 'The URL for this show on the Playground website',
            type: 'url',
            validation: (Rule: any) =>
                Rule.uri({
                    scheme: ['https'],
                }),
        },
    ],
};
