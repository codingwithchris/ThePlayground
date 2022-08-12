import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'siteConfig',
    title: 'Site Config',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'verificationGoogle',
            title: 'Google Verification',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'verificationBing',
            title: 'Bing Verification',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
