import { PageDocument } from '../../../types';

export const schema: PageDocument = {
    name: 'homePage',
    title: 'Home',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'hero',
            title: 'Hero Section',
            type: 'heroWithImage',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'tempBurningBoyImage',
            title: 'Temporary Dream of the Burning Boy Image',
            type: 'imageWithAlt',
        },
        {
            name: 'tempFriendArtImage',
            title: 'Temporary Friend Art Image',
            type: 'imageWithAlt',
        },
        {
            name: 'tempPuffsImage',
            title: 'Temporary Puffs Image',
            type: 'imageWithAlt',
        },
    ],
};
