import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { isLinkInternal } from '@web/shared/utils';

export const Link: React.FC<LinkProps> = ({
    to,
    activeClassName,
    partiallyActive,
    isSubmit,
    noNewTab,
    children,
    className,
    ...others
}) => {
    // Create a passthrough for buttons who might have extended the link
    // ToDo -- move this functionality out of this file and handle in the button files -- it doesn't belong in a "Link" handler.
    if (!to) {
        return (
            <button
                className={className}
                {...others}
                type={isSubmit ? 'submit' : 'button'}
            >
                {children}
            </button>
        );
    }

    // If the link is to an internal page, render using Gatsby Link
    return isLinkInternal(to) ? (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            className={className}
            {...others}
        >
            {children}
        </GatsbyLink>
    ) : (
        // If the link is external or if we are linking to a file, render using standard link
        <OutboundLink
            href={to}
            target={noNewTab ? '_self' : '_blank'}
            rel={noNewTab ? '' : 'noopener noreferrer'}
            className={className}
            {...others}
        >
            {children}
        </OutboundLink>
    );
};

export interface LinkProps {
    to?: string;
    isSubmit?: true;
    activeClassName?: string;
    partiallyActive?: boolean;
    noNewTab?: true;
    className?: string;
}
