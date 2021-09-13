import { CompanyConfig } from '@web/shared/hooks';
import { Show } from '@web/domains/performance/show';

/**
 * https://schema.org/TheaterEvent
 *
 * @param config The configuration object for the site
 */
export const theaterEventSchema = (
    siteUrl: string,
    metaTitle: string,
    { title, location, performances, slug, teaser }: Show
): string => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'TheaterEvent',
        name: metaTitle,
        url: slug.current,
        description: teaser,
        location: {
            '@type': 'PerformingArtsTheater',
            name: location?.title,
            sameAs: location?.website,
            address: {
                '@type': 'PostalAddress',
                addressLocality: location?.address.city,
                addressRegion: location?.address.stateCode,
                postalCode: location?.address.zipcode,
                streetAddress: location?.address.street,
            },
        },
    };

    return JSON.stringify(schema);
};
