import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { animation, spacing, breakpoints } from '@web/ui/tokens';

// Common breakpoint for this component
const breakpoint = breakpoints.m;

export const NeighboringSeasons = styled(Section)`
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        ${breakpoint} {
            flex-direction: row;
        }
    }

    /* wrappers */
    .previous,
    .next {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
        width: 100%;
        transition: ${animation.linkHover};
    }

    .next-link,
    .previous-link,
    .unavailable {
        padding: ${spacing.layout.s} ${spacing.layout.xs};
        ${breakpoint} {
            padding: ${spacing.layout.l} ${spacing.layout.xs};
        }
    }

    .unavailable {
        text-align: center;
        flex-direction: column;
    }

    .previous {
        border-bottom: dashed 1px ${({ theme }) => theme.surfaces.neutralDark};
        ${breakpoint} {
            border-bottom: none;
            border-right: dashed 1px
                ${({ theme }) => theme.surfaces.neutralDark};
        }
    }

    /**
     * Link-specific styling
     */

    .next-link,
    .previous-link {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;
        svg {
            ${breakpoint} {
                transition: ${animation.linkHover};
            }
        }
    }

    .next-link {
        text-align: right;
        svg {
            margin-left: ${spacing.component.l};
        }
    }

    .previous-link {
        svg {
            margin-right: ${spacing.component.l};
        }
    }

    .previous-link:hover,
    .previous-link:active {
        opacity: 0.8;
        ${breakpoint} {
            svg {
                transform: translateX(-5px);
            }
        }
    }

    .next-link:hover,
    .next-link:active {
        opacity: 0.8;
        ${breakpoint} {
            svg {
                transform: translateX(5px);
            }
        }
    }
`;
