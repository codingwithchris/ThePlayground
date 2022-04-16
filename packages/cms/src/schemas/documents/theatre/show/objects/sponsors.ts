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
            name: 'name',
            title: 'Name',
            description:
                'The name of the person or organization sponsoring the show.',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { title: 'Person', value: 'person' },
                    { title: 'Company', value: 'company' },
                ],
            },
        },
        {
            name: 'scope',
            title: 'Scope',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { title: 'Show', value: 'show' },
                    { title: 'Season', value: 'season' },
                ],
            },
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
    ],
    preview: {
        select: {
            name: 'name',
            level: 'level',
        },
        prepare({ name, level }: any) {
            return {
                title: name,
                subtitle: level,
            };
        },
    },
};

export const sponsorHighlight = {
    name: 'sponsorHighlight',
    title: 'Sponsor Highlight',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            description:
                'The name of the person or organization sponsoring the show.',
            type: 'string',
        },
        {
            name: 'image',
            type: 'imageWithAlt',
            options: {
                accept: ['.png', '.svg'],
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'contentBlock',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
    ],
    preview: {
        select: {
            name: 'name',
        },
        prepare({ name, image }: any) {
            return {
                title: name,
                media: image,
            };
        },
    },
};
