import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { spacing, breakpoints, appNavBreakpoint } from '@web/ui/tokens';

export const Hero = styled(Section)`
    padding: ${spacing.layout.m} 0;
    ${appNavBreakpoint} {
        padding: calc(${spacing.layout.l} + ${spacing.appHeaderOffset}) 0
            ${spacing.layout.xl};
    }

    .season-count {
        margin-bottom: ${spacing.component.l};
    }

    .tagline {
        margin-top: ${spacing.component.xl};
    }
`;
