import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'componentConfig',
    title: 'Component Config',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'headerNav',
            type: 'headerNav',
        },
        {
            name: 'footerNav',
            type: 'footerNav',
        },
        {
            name: 'subscribe',
            type: 'subscribe',
        },
    ],
};
