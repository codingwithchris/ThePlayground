export const artistReference = {
    name: 'artistReference',
    title: 'Artist Reference',
    type: 'object',
    fields: [
        {
            name: 'role',
            type: 'string',
        },
        {
            name: 'group',
            type: 'string',
            options: {
                list: [
                    { title: 'Actor', value: 'actor' },
                    { title: 'Crew', value: 'crew' },
                    { title: 'Designer', value: 'designer' },
                    { title: 'Director', value: 'director' },
                    { title: 'Show Shadow', value: 'show-shadow' },
                    { title: 'Stage Manager', value: 'stage-manager' },
                ],
            },
        },
        {
            type: 'reference',
            name: 'artist',
            to: { type: 'artist' },
        },
        {
            name: 'bio',
            type: 'contentBlock',
        },
    ],
    preview: {
        select: {
            firstName: 'artist.firstName',
            lastName: 'artist.lastName',
            media: 'artist.headshot',
            role: 'role',
        },
        prepare({ firstName, lastName, media, role }: any) {
            return {
                title: `${firstName} ${lastName}`,
                subtitle: role,
                media,
            };
        },
    },
};

export const artists = {
    name: 'showArtists',
    title: 'Artists',
    description: '',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'directors',
            title: 'Director(s)',
            type: 'array',
            of: [{ type: 'artistReference' }],
        },
        {
            name: 'actors',
            title: 'Actors',
            type: 'array',
            of: [{ type: 'artistReference' }],
        },
        {
            name: 'designers',
            title: 'Designers',
            type: 'array',
            of: [{ type: 'artistReference' }],
        },
        {
            name: 'crewMembers',
            title: 'Crew Members',
            type: 'array',
            of: [{ type: 'artistReference' }],
        },
        {
            name: 'shadows',
            title: 'Show Shadows',
            type: 'array',
            of: [{ type: 'artistReference' }],
        },
    ],
};
