/**
 * This file contains redirect configs that will ultimately get passed to
 * Netlify at build time via `gatsby-plugin-netlify`. This is much cleaner
 * than managing Netlify's native `_redirects` file.
 *
 * @link https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
 */

// import { redirects as blogRedirects } from '@nerve/domains/blog';
// import { redirects as seasonRedirects } from '@nerve/domains/season';
// import { redirects as showRedirects } from '@nerve/domains/show';

import { GatsbyNetlifyRedirect } from './types';

export const redirects: GatsbyNetlifyRedirect[] = [
    // Redirect Netlify URL to final production URL
    {
        fromPath: 'https://thenerve.netlify.app/*',
        toPath: 'https://nervetheatre.org/:splat',
        statusCode: 301,
        isPermanent: true,
    },

    // Temp redirect since /blog doesn't exist yet
    {
        fromPath: '/blog',
        toPath: '/',
        statusCode: 301,
        isPermanent: true,
    },

    // Domain-level redirects
    // ...blogRedirects,
    // ...seasonRedirects,
    // ...showRedirects,

    /**
     * Old Playground WP Site Redirects
     */

    /**
     * Post-launch redirects from added or removed pages, projects etc
     */
];
