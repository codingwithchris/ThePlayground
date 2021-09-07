import styled from 'styled-components';

import { breakpoints, spacing } from '@web/ui/tokens';

export const SimpleHero = styled.section`
    padding: ${spacing.layout.m} 0;
    ${breakpoints.m} {
        /* We are temporarily accounting for header offset here on desktop until we find a better solution */
        padding: calc(${spacing.layout.xl} + ${spacing.appHeaderDesktopOffset})
            0;
    }
    text-align: left;

    .title {
        margin-bottom: ${spacing.component.l};
        ${breakpoints.m} {
            margin-bottom: ${spacing.component.xs};
        }
    }

    .title,
    .sub-title {
        text-transform: lowercase;
    }
`;
