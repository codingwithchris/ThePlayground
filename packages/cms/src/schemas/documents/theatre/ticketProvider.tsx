import React from 'react';
import { Cloud } from 'react-feather';

import { DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
    name: 'ticketProvider',
    title: 'Ticket Provider',
    icon: <Cloud />,
    disableSEO: true,
    fields: [
        {
            name: 'name',
            title: 'Provider Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'url',
            title: 'Provider URL',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'phone',
            title: 'Box Office Phone Number',
            type: 'string',
        },
    ],
};
