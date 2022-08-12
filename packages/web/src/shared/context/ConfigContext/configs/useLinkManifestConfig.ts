import { useStaticQuery, graphql } from 'gatsby';

import { SEASON_ROOT_SLUG } from '@web/domains/performance/season';
import { BLOG_ROOT_SLUG } from '@web/domains/blog';

import { buildNestedSlugPath, normalizeSlug } from '@web/shared/utils';

export const useLinkManifestConfig = (): LinkManifestConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanityLinkManifestConfig } = useStaticQuery(graphql`
        query LinkManifestConfigQuery {
            sanityLinkManifestConfig(_id: { eq: "linkManifestConfig" }) {
                featuredSeason {
                    slug {
                        current
                    }
                }
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
                sitemap
            }
        }
    `);

    const links = sanityLinkManifestConfig;

    return {
        featuredSeasonRawSlug: links?.featuredSeason?.slug?.current,
        featuredSeason: buildNestedSlugPath([
            SEASON_ROOT_SLUG,
            links?.featuredSeason?.slug?.current,
        ]),
        blogPage: normalizeSlug(links?.blogPage?.slug?.current),
        archivePage: normalizeSlug(links?.showArchivePage?.slug?.current),
        sitemap: links?.sitemap,
        getShow: (season, show) =>
            season &&
            show &&
            buildNestedSlugPath([SEASON_ROOT_SLUG, season, show]),
        getSeason: (season) =>
            season && buildNestedSlugPath([SEASON_ROOT_SLUG, season]),
        getPost: (post) =>
            (post && buildNestedSlugPath([BLOG_ROOT_SLUG, post])) ??
            BLOG_ROOT_SLUG,
    };
};

export interface LinkManifestConfig {
    featuredSeasonRawSlug: string | undefined;
    featuredSeason: string | undefined;
    blogPage: string | undefined;
    archivePage: string | undefined;
    sitemap: string;
    getShow: (season?: string, show?: string) => string | undefined;
    getSeason: (season?: string) => string | undefined;
    getPost: (post?: string) => string | undefined;
}
