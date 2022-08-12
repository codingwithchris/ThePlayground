import { useStaticQuery, graphql } from 'gatsby';
import { SanityImageDataWithAlt } from '@web/shared/types';

export const useCompanyConfig = (): CompanyConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanityCompanyConfig } = useStaticQuery(graphql`
        query CompanyConfigQuery {
            sanityCompanyConfig(_id: { eq: "companyConfig" }) {
                city
                ein
                emailAuditions
                emailClasses
                emailGeneral
                emailSponsorship
                emailTicketing
                foundingDate
                github
                instagram
                instagramUsername
                legacyLegalName
                legacyName
                legacyWebsite
                legalName
                logoOnDark {
                    asset {
                        url
                        size
                    }
                    alt
                }
                logoOnLight {
                    alt
                    asset {
                        size
                        url
                    }
                }
                name
                spotify
                state
                stateCode
                twitter
                twitterUsername
                website
                youtube
                youtubeShowTrailers
                zip
            }
        }
    `);

    return sanityCompanyConfig;
};

export interface CompanyConfig {
    city: string;
    ein: string;
    emailAuditions: string;
    emailGeneral: string;
    emailTicketing: string;
    emailSponsorship: string;
    emailClasses: string;
    foundingDate: string;
    github: string;
    instagram: string;
    instagramUsername: string;
    legacyLegalName: string;
    legacyName: string;
    legacyWebsite: string;
    legalName: string;
    logoOnDark: SanityImageDataWithAlt;
    logoOnLight: SanityImageDataWithAlt;
    name: string;
    spotify: string;
    state: string;
    stateCode: string;
    twitter: string;
    twitterUsername: string;
    website: string;
    youtube: string;
    youtubeShowTrailers: string;
    zip: string;
}
