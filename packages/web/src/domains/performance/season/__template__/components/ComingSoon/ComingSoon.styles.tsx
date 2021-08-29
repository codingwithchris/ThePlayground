import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { spacing, breakpoints } from '@web/ui/tokens';

export const ComingSoon = styled(Section)`
    padding: ${spacing.layout.s} 0;
    ${breakpoints.m} {
        padding: ${spacing.layout.m} 0;
    }
`;
