import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'componentConfig',
    title: 'Component Config',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'headerNav',
            title: 'Header Navigation',
            type: 'headerNav',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'footerNav',
            title: 'Footer Navigation',
            type: 'footerNav',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'subscribe',
            type: 'subscribe',
            title: 'Subscribe CTA',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
};
