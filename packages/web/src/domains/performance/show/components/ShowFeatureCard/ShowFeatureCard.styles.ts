import styled, { css } from 'styled-components';

import {
    animation,
    borders,
    breakpoints,
    spacing,
    zIndex,
} from '@web/ui/tokens';

const breakpoint = breakpoints.s;

export const ShowFeatureCard = styled.article`
    position: relative;
    transition: ${animation.cardHover};

    .wrapper {
        display: block;
        height: 100%;
    }

    .image {
        border-radius: ${borders.imageRadius};
        transition: ${animation.cardHover};
        z-index: ${zIndex.behind};
    }

    .overlay {
        pointer-events: none;
        transition: ${animation.cardHover};
    }

    .content {
        display: flex;
        flex-direction: column;
        left: 0;
        position: absolute;
        height: 100%;
        top: 0;
        padding: ${spacing.component.m};
        width: 100%;
        z-index: ${zIndex.front};

        ${breakpoint} {
            padding: ${spacing.layout.s};
        }
    }

    .meta {
        align-items: flex-start;
        display: flex;
        justify-content: space-between;
    }

    .title-group {
        margin-bottom: 0;
        margin-top: auto;
        max-width: 700px;

        [data-device-scope='desktop'] {
            display: none;
            ${breakpoint} {
                display: block;
            }
        }

        [data-device-scope='mobile'] {
            display: block;
            ${breakpoint} {
                display: none;
            }
        }
    }

    .title {
        text-transform: uppercase;
        ${breakpoints.m} {
            margin-bottom: ${spacing.component.xxs};
        }
    }

    &:hover,
    &:active {
        .overlay {
            opacity: 0.5;
        }
    }
`;
