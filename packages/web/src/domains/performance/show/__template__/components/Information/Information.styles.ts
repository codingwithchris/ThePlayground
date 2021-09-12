import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { breakpoints, spacing } from '@web/ui/tokens';

const breakpoint = breakpoints.s;

export const Information = styled(Section)`
    padding: ${spacing.layout.m} 0;

    ${breakpoint} {
        padding: ${spacing.layout.m} 0;
    }

    .section-title {
        text-align: center;
        margin-bottom: ${spacing.layout.s};
    }

    .info-wrapper {
        ${breakpoint} {
            display: flex;
        }
    }

    .performance-info {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: ${spacing.component.m};
        max-width: 475px;
        margin-bottom: ${spacing.layout.s};
        margin-left: auto;
        margin-right: auto;

        ${breakpoint} {
            flex: 0 1 300px;
            margin-bottom: 0px;
            margin-left: 0;
            margin-right: ${spacing.layout.xs};
            max-width: 100%;
        }
    }

    .content-info {
        max-width: 475px;
        margin-left: auto;
        margin-right: auto;

        ${breakpoint} {
            flex: 0 1 475px;
            margin-left: auto;
            margin-right: 0;
            align-self: center;
            max-width: 100%;
        }

        .info-items {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: ${spacing.component.m};
        }
    }
`;
