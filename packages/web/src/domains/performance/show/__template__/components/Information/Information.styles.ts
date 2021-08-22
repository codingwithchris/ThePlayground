import styled from 'styled-components';
import { Section } from '@web/ui/core';
import {
    breakpoints,
    spacing,
    containerGutter,
    totalContainerGutter,
} from '@web/ui/tokens';

export const Information = styled(Section)`
    padding: ${spacing.layout.m} 0;

    ${breakpoints.s} {
        padding: ${spacing.layout.m} 0;
    }

    .section-title {
        text-align: center;
        margin-bottom: ${spacing.layout.s};
    }

    .info-series {
        display: block;
    }

    .info-grid {
        display: grid;
        grid-gap: ${spacing.component.m};
        grid-template-columns: repeat(2, 1fr);
        margin-top: ${spacing.layout.s};
    }
`;
