import { GlobalConfigs } from '@web/shared/context';
import { useSingleShowContext } from '@web/domains/performance/show';
import { ShowPageProps } from '@web/domains/performance/show/__template__/types';

/**
 * https://schema.org/TheaterEvent
 *
 * @param config The configuration object for the site
 */
export const theaterEventSchema =
    (show: ShowPageProps) =>
    (companyConfig: GlobalConfigs['company']): string => {
        const { currentShow } = useSingleShowContext();

        const schema = {
            '@context': 'https://schema.org',
            '@type': 'TheaterEvent',
            name: show.seo.title,
            url: currentShow?.path,
            description: show.teaser,
            location: {
                '@type': 'PerformingArtsTheater',
                name: show.location?.title,
                sameAs: show.location?.website,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: show.location?.address.city,
                    addressRegion: show.location?.address.stateCode,
                    postalCode: show.location?.address.zipcode,
                    streetAddress: show.location?.address.street,
                },
            },
            organizer: {
                '@type': 'Organization',
                '@id': `${companyConfig.website}#organization`,
            },
        };

        return JSON.stringify(schema);
    };
