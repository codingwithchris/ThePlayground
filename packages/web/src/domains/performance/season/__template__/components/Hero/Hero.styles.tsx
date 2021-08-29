import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { spacing, breakpoints, appNavBreakpoint } from '@web/ui/tokens';

export const Hero = styled(Section)`
    padding: ${spacing.layout.m} 0;
    ${appNavBreakpoint} {
        padding: ${spacing.layout.xl} 0 ${spacing.layout.m};
    }

    .tagline {
        margin-bottom: ${spacing.layout.xs};
    }
`;
