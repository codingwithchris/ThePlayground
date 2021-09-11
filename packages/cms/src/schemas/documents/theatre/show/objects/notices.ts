export const healthNotice = {
    title: 'Health Notice',
    name: 'healthNotice',
    type: 'object',
    fields: [
        {
            name: 'shouldDisplay',
            title: 'Should Notice Display?',
            description: 'Should this notice be displayed on this show page?',
            type: 'boolean',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentBlock',
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
