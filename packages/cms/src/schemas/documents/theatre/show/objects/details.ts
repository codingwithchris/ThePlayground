export const detailItem = {
    title: 'Detail Item',
    name: 'detailItem',
    type: 'object',
    fields: [
        {
            title: 'Icon',
            name: 'icon',
            type: 'icon',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Copy',
            name: 'copy',
            type: 'text',
            rows: 2,
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Has Modal',
            name: 'hasModal',
            description: 'This item has a modal with additional information',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Modal Trigger Text',
            name: 'modalTriggerText',
            description: 'The text that a user will click to trigger the modal',
            type: 'string',
        },
        {
            title: 'Modal Content',
            name: 'modalContent',
            type: 'contentBlock',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'copy',
        },
    },
};
