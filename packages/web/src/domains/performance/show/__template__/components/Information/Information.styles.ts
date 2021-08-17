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

    .info-wrapper {
        display: flex;
    }

    .info-grid {
        flex: 1;
    }

    .info-tickets {
        flex: 0 1 500px;
    }
`;
