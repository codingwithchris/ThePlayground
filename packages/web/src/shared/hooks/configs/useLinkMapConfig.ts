import { useStaticQuery, graphql } from 'gatsby';

import { SEASON_ROOT_SLUG } from '@web/domains/performance/season';
import { BLOG_ROOT_SLUG } from '@web/domains/blog';

import { buildNestedSlugPath, normalizeSlug } from '@web/shared/utils';

export const useLinkMapConfig = (): LinkMapConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanityLinkMapConfig } = useStaticQuery(graphql`
        query LinkMapConfigQuery {
            sanityLinkMapConfig(_id: { eq: "linkMapConfig" }) {
                blogPage {
                    slug {
                        current
                    }
                }
                showArchivePage {
                    slug {
                        current
                    }
                }
                supportUsPage {
                    slug {
                        current
                    }
                }
                sitemap
            }
        }
    `);

    const links = sanityLinkMapConfig;

    return {
        blogPage: normalizeSlug(links?.blogPage?.slug?.current),
        archivePage: normalizeSlug(links?.showArchivePage?.slug?.current),
        supportUsPage: normalizeSlug(links?.supportUsPage?.slug?.current),
        sitemap: links?.sitemap,
        getShow: (season, show) =>
            buildNestedSlugPath([SEASON_ROOT_SLUG, season, show]),
        getSeason: (season) => buildNestedSlugPath([SEASON_ROOT_SLUG, season]),
        getPost: (post) =>
            buildNestedSlugPath([BLOG_ROOT_SLUG, post]) ?? BLOG_ROOT_SLUG,
    };
};

export interface LinkMapConfig {
    blogPage: string | undefined;
    archivePage: string | undefined;
    supportUsPage: string | undefined;
    sitemap: string;
    getShow: (season: string, show: string) => string | undefined;
    getSeason: (season: string) => string | undefined;
    getPost: (post: string) => string;
}
