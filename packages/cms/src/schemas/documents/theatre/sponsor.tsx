import React from 'react';
import { Heart } from 'react-feather';

import { DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
    name: 'sponsor',
    title: 'Sponsors',
    icon: <Heart />,
    disableSEO: true,
    fields: [
        {
            name: 'name',
            title: 'Sponsor Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
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
            name: 'image',
            title: 'Image',
            type: 'imageWithAlt',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'contentBlock',
        },
    ],
};
