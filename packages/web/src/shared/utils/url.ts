import { isSSR } from './ssr';

/**
 * Return the full current URL path without query strings.
 */
export const getCurrentRootURL = () =>
    isSSR
        ? ``
        : `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`;

/**
 *
 * @param slug
 */
const stripTrailingLeadingSlashes = (slug: string) =>
    slug.replace(/^\/|\/$/g, '');

/**
 * Checks to see if a slug is valid.
 *
 * A valid slug should be a string whose length is greater than 0
 *
 * @param slug The slug to check
 */
const isValidSlug = (slug: string) =>
    typeof slug === 'string' && slug.length > 0;

/**
 * Strip all leading and trailing slashes from slugs, then return the slug with
 * a single leading slash.
 *
 * @link https://stackoverflow.com/questions/3840600/javascript-regular-expression-remove-first-and-last-slash
 *
 * @param slug The slug to process
 */
export const normalizeSlug = (slug: string, validate = true) => {
    if (validate && !isValidSlug(slug)) {
        console.log(
            'Slug failed validation. Slug will not be normalized: ',
            slug
        );
        return;
    }

    const normalizedSlug = stripTrailingLeadingSlashes(slug);
    return `/${normalizedSlug}`;
};

/**
 * Build a multi-layerd slug with a parent/child relationship
 *
 * @param slugs
 */
export const buildNestedSlugPath = (slugs: string[]) => {
    if (!slugs.every(isValidSlug)) {
        console.log(
            'One or more slugs failed validation when attempting to build a nested slug path. No path can be built: ',
            slugs
        );
        return;
    }

    const normalizedSlugs = slugs.map((slug) =>
        stripTrailingLeadingSlashes(slug).toLowerCase()
    );

    return normalizeSlug(normalizedSlugs.join('/'));
};

/**
 * Get the referring external website page. This is the entry point where
 * a user entered the website
 */
export const getExternalReferrer = () => {
    const referrer = isSSR ? '' : document.referrer;
    return referrer ?? 'direct';
};
