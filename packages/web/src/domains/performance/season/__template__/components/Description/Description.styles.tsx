import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { spacing, breakpoints, appNavBreakpoint } from '@web/ui/tokens';

export const Description = styled(Section)`
    padding: ${spacing.layout.m} 0;
    ${appNavBreakpoint} {
        padding: ${spacing.layout.l} 0;
    }

    .label {
        margin-bottom: ${spacing.component.xl};
    }
`;
