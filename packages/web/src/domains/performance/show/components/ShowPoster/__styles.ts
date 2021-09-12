import styled, { css } from 'styled-components';

import {
    animation,
    borders,
    breakpoints,
    spacing,
    zIndex,
} from '@web/ui/tokens';

/**
 * Presents very minimal information about a show in a layout that's reminiscent
 * of a "poster" you might get printed.
 */
export const ShowPoster = styled.article`
    position: relative;
    transition: ${animation.cardHover};

    .image {
        border-radius: ${borders.imageRadius};
        filter: grayscale(1);
        transition: ${animation.cardHover};
        z-index: ${zIndex.behind};
    }

    .overlay {
        pointer-events: none;
        transition: ${animation.cardHover};
    }

    .content {
        bottom: 0;
        position: absolute;
        padding: ${spacing.component.m};
        z-index: ${zIndex.front};
    }

    .title {
        text-transform: uppercase;
        margin-bottom: ${spacing.component.xxs};
    }

    .season {
        text-transform: lowercase;
        margin-top: ${spacing.component.s};
    }

    &:hover {
        .image {
            filter: grayscale(0);
        }

        .overlay {
            opacity: 0.2;
        }

        ${breakpoints.m} {
            transform: scale(1.01);
        }
    }
`;
