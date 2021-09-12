import styled from 'styled-components';
import { Section } from '@web/ui/core';

import { breakpoints, spacing } from '@web/ui/tokens';

export const FullSeasonOverview = styled(Section)`
    .intro-heading {
        margin-bottom: ${spacing.layout.l};
    }

    .intro-copy {
        margin-bottom: ${spacing.layout.l};
        max-width: 700px;
    }

    .tagline {
        margin-bottom: ${spacing.layout.xs};
    }

    .show-list {
        align-items: center;
        display: flex;
        list-style: none;
        flex-direction: column;
        justify-content: center;

        ${breakpoints.m} {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    .show-list > li {
        flex: 1 0 auto;
        margin: ${spacing.component.l};
        max-width: 600px;
        width: 100%;

        ${breakpoints.m} {
            flex: 1 0 500px;
        }
    }

    .footer {
        margin-top: ${spacing.layout.s};
        text-align: center;
    }
`;
