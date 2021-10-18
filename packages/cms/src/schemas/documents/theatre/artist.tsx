import React from 'react';
import { Smile } from 'react-feather';

import { DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
    name: 'artist',
    title: 'Artists',
    icon: <Smile />,
    disableSEO: true,
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'middleName',
            title: 'Middle Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'pronouns',
            title: 'Pronouns',
            type: 'string',
            options: {
                list: [
                    { title: 'He/Him', value: 'he/him' },
                    { title: 'She/Her', value: 'she/her' },
                    { title: 'They/Them', value: 'they/them' },
                    { title: 'She/They', value: 'she/they' },
                    { title: 'He/They', value: 'he/they' },
                ],
            },
        },
        {
            name: 'instagram',
            title: 'Instagram Profile',
            type: 'url',
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
        },
        {
            name: 'headshot',
            title: 'Headshot',
            description: '750x750px',
            type: 'imageWithFullMeta',
        },
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
            media: 'headshot',
        },
        prepare({ firstName, lastName, media }: any) {
            return {
                title: `${firstName} ${lastName}`,
                subtitle: `more info coming soon`,
                media,
            };
        },
    },
};
