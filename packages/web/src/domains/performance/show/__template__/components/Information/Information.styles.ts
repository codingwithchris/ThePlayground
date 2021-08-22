import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { breakpoints, spacing } from '@web/ui/tokens';

export const Information = styled(Section)`
    padding: ${spacing.layout.m} 0;

    ${breakpoints.s} {
        padding: ${spacing.layout.m} 0;
    }

    .section-title {
        text-align: center;
        margin-bottom: ${spacing.layout.s};
    }

    .info-wrapper {
        display: grid;
        grid-gap: ${spacing.component.m};
        grid-template-columns: repeat(2, 1fr);
    }

    .performance-info {
        margin-top: ${spacing.layout.s};
    }
`;
