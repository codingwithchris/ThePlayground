/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import { GatsbyNode, CreatePagesArgs } from 'gatsby';

import { redirects } from '../redirects';

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
    await Promise.all([generateRedirects(args)]);
};
