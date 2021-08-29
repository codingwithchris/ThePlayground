import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { spacing, breakpoints } from '@web/ui/tokens';

export const ShowsThisSeason = styled(Section)`
    padding: ${spacing.layout.m} ${breakpoints.m} {
        padding: ${spacing.layout.l};
    }

    > .content > .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: ${spacing.layout.xs};
    }
`;
