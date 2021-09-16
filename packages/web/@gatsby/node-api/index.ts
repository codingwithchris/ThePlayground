/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import {
    GatsbyNode,
    CreatePagesArgs,
    Actions as GatsbyNodeActions,
    BuildArgs as GatsbyNodeBuildArgs,
} from 'gatsby';

import path from 'path';

// ! I have no idea why, but importing from `@web/domains/performance/season` breaks with `SyntaxError: Unexpected token '<'`
// ! when any JSX components are exported from the root index.ts file. It took me forever to find the issue,
// ! but adding `/constants` to the below path and directly accessing the constant seems to fix this issue. WTF.

import { SEASON_ROOT_SLUG } from '@web/domains/performance/season/constants';
import { redirects } from '../redirects';

import {
    SeasonPageConfig,
    ShowPageConfig,
    BlogPostConfig,
    SanityBlogPostData,
    SanityBlogPageData,
    SanitySeasonShowQueryData,
} from './types';

/**
 * Build a single season page
 *
 * @param {*} seasonConfig
 * @param {*} createPage
 */
const buildSeasonPage = async (
    seasonConfig: SeasonPageConfig,
    createPage: GatsbyNodeActions['createPage']
) => {
    console.log(`🗓️  Season: ${seasonConfig.url}`);

    await createPage({
        path: seasonConfig.url,
        component: seasonConfig.template,
        context: {
            id: seasonConfig.id,
            slug: seasonConfig.slug,
            seasonURL: seasonConfig.url,
        },
    });
};

/**
 * Build a single show page
 *
 * @param {*} showConfig
 * @param {*} createPage
 */
const buildShowPage = async (
    showConfig: ShowPageConfig,
    createPage: GatsbyNodeActions['createPage']
) => {
    console.log(`🎭 Show: ${showConfig.url}`);

    await createPage({
        path: showConfig.url,
        component: showConfig.template,
        context: {
            seasonID: showConfig.season.id,
            seasonSlug: showConfig.season.slug,
            seasonURL: showConfig.season.url,
            slug: showConfig.slug,
            id: showConfig.id,
        },
    });
};

/**
 * Query the "Blog" parent page.
 *
 * @param {*} graphql graphql instance from createPages
 * @param {*} reporter reporter instance from createPages
 */
const getBlogPostParentPage = async (
    graphql: GatsbyNodeBuildArgs['graphql'],
    reporter: GatsbyNodeBuildArgs['reporter']
) => {
    console.log(`👨‍👧‍👧 Retrieving "Blog" parent page slug...`);

    const { data, errors } = await graphql<SanityBlogPageData>(`
        {
            sanityLinkManifestConfig(_id: { eq: "linkManifestConfig" }) {
                blogPage {
                    slug {
                        current
                    }
                }
            }
        }
    `);

    if (errors) {
        reporter.panicOnBuild(
            `🔥 Error attempting to retrieve "Blog" posts parent page ->`,
            errors
        );
        return;
    }

    if (!data) {
        reporter.panicOnBuild(
            `🔥 Error: The GraphQL query to retrieve the Blog parent page ran, but not data was returned.`
        );
        return;
    }

    const blogPage = data?.sanityLinkManifestConfig?.blogPage?.slug?.current;

    if (!blogPage) {
        reporter.panicOnBuild(
            `🔥 Data was returned for the Blog parent page query, but the 'blogPage' could not be destructured.`
        );
        return;
    }

    console.log(`👨‍👧‍👧 "Blog" parent page: /${blogPage}`);

    return blogPage;
};

/**
 * Build a single blog page
 *
 * @param {*} showConfig
 * @param {*} createPage
 */
const buildBlogPost = async (
    blogConfig: BlogPostConfig,
    createPage: GatsbyNodeActions['createPage']
) => {
    console.log(`✏️ Blog: ${blogConfig.url}`);

    await createPage({
        path: blogConfig.url,
        component: blogConfig.template,
        context: {
            uid: blogConfig.slug,
            id: blogConfig.id,
        },
    });
};

/**
 * Query all available seasons and shows and dynamically
 * generate pages from the results
 *
 * @param {*} params destructured instances of createPages params
 */
const generateSeasonsAndShows = async ({
    graphql,
    actions,
    reporter,
}: CreatePagesArgs) => {
    // Query Season and Show data
    const { data, errors } = await graphql<SanitySeasonShowQueryData>(`
        {
            allSanitySeason(filter: { doNotDisplay: { eq: false } }) {
                nodes {
                    _id
                    slug {
                        current
                    }

                    shows {
                        toggles {
                            isHiddenFromWebsite
                        }
                        _id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        reporter.panicOnBuild(
            `🔥 Error while running GraphQL query on Seasons & Shows ->`,
            errors
        );
        return;
    }

    if (!data) {
        reporter.panicOnBuild(
            `🔥 Error: The GraphQL query for Seasons & Shows ran, but not data was returned.`
        );
        return;
    }

    /**
     * Begin building Season pages
     */
    console.log(`🚀 Begin creating dynamic Season and Show pages...`);

    const { createPage } = actions;

    data.allSanitySeason.nodes.forEach((season) => {
        const seasonConfig: SeasonPageConfig = {
            slug: season.slug.current,
            url: `/${SEASON_ROOT_SLUG}/${season.slug.current}/`,
            id: season._id,
            template: path.resolve(
                `./src/domains/performance/season/__template__/SeasonTemplate.tsx`
            ),
        };

        buildSeasonPage(seasonConfig, createPage);

        // Bail if there are no shows linked to the season
        if (season.shows.length === 0) {
            reporter.log(
                `The season ${season.slug} was created successfully but there are no shows to link to it.`
            );
            return;
        }

        /**
         * Begin building pages for each Show in the current Season
         */
        season.shows.forEach((show) => {
            // Don't display specified shows
            if (show.toggles.isHiddenFromWebsite) {
                reporter.log(
                    `Creation of the show: "${show.slug.current}" is being skipped because the toggle "isHiddenFromWebsite" is set to true.`
                );
                return;
            }

            const showConfig: ShowPageConfig = {
                slug: show.slug.current,
                url: `${seasonConfig.url}/${show.slug.current}/`,
                id: show._id,
                template: path.resolve(
                    `./src/domains/performance/show/__template__/ShowTemplate.tsx`
                ),
                season: seasonConfig,
            };

            buildShowPage(showConfig, createPage);
        });
    });

    console.log(`🎉 Done creating Season and Show pages!`);
};

/**
 * Query all available posts and dynamically and generate pages from the results,
 *
 * @param {*} params destructured instances of createPages params
 */
const generateBlogPosts = async ({
    graphql,
    actions,
    reporter,
}: CreatePagesArgs) => {
    const blogParentPage = await getBlogPostParentPage(graphql, reporter);

    // Query Blog data
    const { data, errors } = await graphql<SanityBlogPostData>(`
        {
            allSanityPost(filter: { doNotDisplay: { eq: false } }) {
                nodes {
                    _id
                    slug {
                        current
                    }
                }
            }
        }
    `);

    if (errors) {
        reporter.panicOnBuild(
            `🔥 Error while running GraphQL query on Blog Posts ->`,
            errors
        );
        return;
    }

    if (!data) {
        reporter.panicOnBuild(
            `🔥 The GraphQL query for Blog Posts ran, but not data was returned.`
        );
        return;
    }

    /**
     * Begin building Blog pages
     */

    const { createPage } = actions;

    data.allSanityPost.nodes.forEach((post) => {
        const blogConfig: BlogPostConfig = {
            slug: post.slug.current,
            url: `/${blogParentPage}/${post.slug.current}/`,
            id: post._id,
            template: path.resolve(
                `./src/domains/blog/__template__/PostTemplate.tsx`
            ),
        };

        buildBlogPost(blogConfig, createPage);
    });

    console.log(`🎉 Done creating Blog pages!`);
};

/**
 * Build redirects for our application based on the config.
 *
 * @param {*} actions destructured action instance from creatPages
 */
const generateRedirects = async ({ actions }: CreatePagesArgs) => {
    const { createRedirect } = actions;

    // Build all app redirects
    await redirects.forEach((redirect) => createRedirect(redirect));
};

/**
 * When Gatsby attempts to crete pages, run the requested functionality
 */

export const createPages: GatsbyNode['createPages'] = async (args) => {
    await Promise.all([
        generateSeasonsAndShows(args),
        generateBlogPosts(args),
        generateRedirects(args),
    ]);
};
