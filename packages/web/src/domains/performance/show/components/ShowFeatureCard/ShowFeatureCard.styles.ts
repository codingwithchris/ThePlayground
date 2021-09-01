import styled, { css } from 'styled-components';

import {
    animation,
    borders,
    breakpoints,
    spacing,
    zIndex,
} from '@web/ui/tokens';

export const ShowFeatureCard = styled.article<{ isArchived: boolean }>`
    position: relative;

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

        ${breakpoints.m} {
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
    }

    .title {
        text-transform: uppercase;
        ${breakpoints.m} {
            margin-bottom: ${spacing.component.xxs};
        }
    }
`;
