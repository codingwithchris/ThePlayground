import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { animation, spacing, breakpoints } from '@web/ui/tokens';

export const NeighboringSeasons = styled(Section)`
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        ${breakpoints.m} {
            flex-direction: row;
        }
    }

    .previous,
    .no-more-previous,
    .next,
    .coming-soon {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
        padding: ${spacing.layout.l} ${spacing.layout.xs};
        width: 100%;
    }

    .previous,
    .no-more-previous {
        border-bottom: dashed 1px ${({ theme }) => theme.surfaces.neutralDark};
        ${breakpoints.m} {
            border-bottom: none;
            border-right: dashed 1px
                ${({ theme }) => theme.surfaces.neutralDark};
        }
    }

    .no-more-previous,
    .coming-soon {
        flex-direction: column;
    }

    .next,
    .previous {
        transition: ${animation.linkHover};
    }

    .next {
        text-align: right;
    }

    .next svg,
    .previous svg {
        ${breakpoints.m} {
            transition: ${animation.linkHover};
        }
    }

    .next svg {
        margin-left: ${spacing.component.l};
    }

    .previous svg {
        margin-right: ${spacing.component.l};
    }

    /* Hover effects for links */
    .previous:hover,
    .previous:active {
        opacity: 0.8;
        ${breakpoints.m} {
            svg {
                transform: translateX(-5px);
            }
        }
    }

    .next:hover,
    .next:active {
        opacity: 0.8;
        ${breakpoints.m} {
            svg {
                transform: translateX(5px);
            }
        }
    }
`;
