/**
 * Implement Gatsby's Config APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

// Config environment variables
dotenv.config({ path: `.env` });

/**
 * Get information about the current environment so we can share important
 * details to various facets of our application.
 */

const deployURL = process.env.DEPLOY_PRIME_URL ?? '';
const prodURL = process.env.URL ?? '';
const appVersion = process.env.npm_package_version ?? '';
const deployContext = process.env.CONTEXT ?? '';
const deployID = process.env.DEPLOY_ID ?? '';
const commitRef = process.env.COMMIT_REF ?? '';
const prevCommitRef = process.env.CACHED_COMMIT_REF ?? '';
const environment = deployContext || 'development';
const isDev = environment === 'development';
const isDeployPreview = environment === 'deploy-preview';
const isProd = environment === 'production';

// Loads a special tracking ID for Dev environments to make sure our data on prod isn't tainted
const googleAnalyticsTrackingID = isProd
    ? process.env.GOOGLE_ANALYTICS_TRACKING_ID
    : process.env.GOOGLE_ANALYTICS_DEV_TRACKING_ID;

const googleAdWordsTrackingID = isProd
    ? process.env.GOOGLE_ADWORDS_TRACKING_ID
    : undefined;

//  Todo: isNetlifyPreview (for deploy-preview and branch-deploy)
//  Todo: isStaging (one we get a staging environment set up)

module.exports = {
    siteMetadata: {
        appVersion,
        environment,
        prodURL,
        deployURL,
        deployContext,
        deployID,
        commitRef,
        prevCommitRef,
        isDev,
        isDeployPreview,
        isProd,
    },
    flags: {
        PRESERVE_WEBPACK_CACHE: true,
    },
    plugins: [
        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/
         */
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                // Add any options here
            },
        },

        /**
         * Simplify redirect & header generation on Netlify
         *
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/
         */
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                // Custom options currently not in use
                mergeSecurityHeaders: false, // boolean to turn off the default security headers
                mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers
                mergeCachingHeaders: false, // boolean to turn off the default caching headers
            },
        },

        /**
         * Normalize our paths to not use trailing slashes
         *
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-remove-trailing-slashes
         */
        `gatsby-plugin-remove-trailing-slashes`,

        /**
         * The official Sentry implementation for Gatsby
         * @link https://docs.sentry.io/platforms/javascript/guides/gatsby/
         */
        // TODO - build custom tags with env variables (most likely will do this in gatsby-browser.js)
        // https://docs.sentry.io/platforms/javascript/enriching-events/tags/
        {
            resolve: '@sentry/gatsby',
            options: {
                dsn: process.env.SENTRY_DSN,
                environment,
                // TODO: One day it would be nice to make this a more transparent reference
                release: commitRef,
                // A rate of 1 means all traces will be sent, so it's good for testing.
                // In production, you'll likely want to either choose a lower rate or use `tracesSampler` instead (see below).
                tracesSampleRate: 0.5,
                enabled: !isDev,
            },
        },

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
         */
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // your google analytics tracking ids
                trackingIds: [
                    googleAnalyticsTrackingID,
                    googleAdWordsTrackingID,
                ].filter(Boolean),
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    // optimize_id: 'OPT_CONTAINER_ID',
                    // anonymize_ip: false,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // Setting this parameter is also optional
                    // respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    // exclude: [],
                },
            },
        },

        /**
         * Implement the babel module resolver for a really nice global import syntax
         *
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-module-resolver/
         */
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: '', // <- will be used as a root dir
                aliases: {
                    '@gatsby': './@gatsby',
                    '@web/domains': './src/domains',
                    '@web/assets': './src/assets',
                    '@web/shared': './src/shared',
                    '@web/ui/core': './src/ui/components/core',
                    '@web/ui/layout': './src/ui/components/layout',
                    '@web/ui/molecules': './src/ui/components/molecules',
                    '@web/ui/themes': './src/ui/themes',
                    '@web/ui/tokens': './src/ui/tokens',
                },
            },
        },

        /**
         * Styled Components support
         *
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/
         */
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },

        /**
         * Query data from our CMS
         *
         * @link https://www.gatsbyjs.com/plugins/gatsby-source-sanity/
         */
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: process.env.GATSBY_SANITY_PROJECT_ID,
                dataset: process.env.GATSBY_SANITY_DATASET,
                token: process.env.SANITY_TOKEN,
                overlayDrafts: isDev,
                watchMode: isDev,
            },
        },

        /**
         * A helper plugin for subscribing new email addresses to a Mailchimp email list.
         *
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
         */
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    process.env.GATSBY_MAILCHIMP_NEWSLETTER_SUBSCRIBE_ENDPOINT,
            },
        },

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
         */
        `gatsby-plugin-react-helmet`,

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
         */
        `gatsby-plugin-image`,

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
         */
        `gatsby-plugin-sharp`,

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
         */
        `gatsby-transformer-sharp`,

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
         */
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `The Nerve Theatre`,
                short_name: `Nerve`,
                start_url: `/`,
                background_color: `#0C1E31`,
                theme_color: `#F25C05`,
                display: `standalone`,
                icon: 'static/icons/nerve-site-icon.png',
            },
        },
    ],
};
