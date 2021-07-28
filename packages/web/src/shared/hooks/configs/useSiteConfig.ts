import { useStaticQuery, graphql } from 'gatsby';

export const useSiteConfig = (): SiteConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanitySiteConfig } = useStaticQuery(graphql`
        query SiteConfigQuery {
            sanitySiteConfig(_id: { eq: "siteConfig" }) {
                verificationGoogle
                verificationBing
                facebookAppID
            }
        }
    `);

    return sanitySiteConfig;
};

export interface SiteConfig {
    verificationGoogle: string;
    verificationBing: string;
    facebookAppID: string;
}
