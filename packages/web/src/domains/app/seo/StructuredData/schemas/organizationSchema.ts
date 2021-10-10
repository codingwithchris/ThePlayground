import { GlobalConfigs } from '@web/shared/context';

/**
 * https://schema.org/Organization
 *
 * @param config The configuration object for the site
 */
export const organizationSchema = (
    config: GlobalConfigs['company']
): string => {
    const siteURL = config.website;

    const schema = {
        '@type': 'Organization',
        '@id': `${siteURL}/#organization`,
        name: config.name,
        email: config.emailGeneral,
        url: siteURL,
        logo: {
            '@type': 'ImageObject',
            '@id': `${siteURL}/#logo`,
            url: config.logoOnLight.asset.url,
            caption: config.logoOnLight.alt,
        },
        image: {
            '@id': `${siteURL}/#logo`,
        },
        legalName: config.legalName,
        taxID: config.ein,
        foundingDate: new Date(config.foundingDate),
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressLocality: config.city,
            addressRegion: config.state,
            postalCode: config.zip,
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                email: config.emailGeneral,
                contactType: 'general contact',
                availableLanguage: 'English',
            },
        ],
        sameAs: [
            config.facebook,
            config.instagram,
            config.spotify,
            config.youtube,
            config.github,
        ],
        founders: [
            {
                '@type': 'Person',
                givenName: 'Chris',
                familyName: 'Hahn',
                jobTitle: 'Artistic Director',
            },
            {
                '@type': 'Person',
                givenName: 'Jenna',
                familyName: 'Burnette',
                jobTitle: 'Artistic Director',
            },
        ],
    };

    return JSON.stringify(schema);
};
