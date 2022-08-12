import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'linkManifestConfig',
    title: 'Link Manifest Config',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'featuredSeason',
            title: 'Featured Season',
            type: 'reference',
            to: [{ type: 'season' }],
        },
        {
            name: 'showArchivePage',
            title: 'The Archive Page',
            type: 'reference',
            to: [{ type: 'archivePage' }],
        },
        {
            name: 'blogPage',
            title: 'Blog Page',
            type: 'reference',
            to: [{ type: 'blogPage' }],
        },
        {
            name: 'sitemap',
            title: 'Sitemap',
            type: 'string',
        },
    ],
};
