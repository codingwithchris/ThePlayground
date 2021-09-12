import styled from 'styled-components';
import { spacing } from '@web/ui/tokens';
import { Card } from '@web/ui/core';

export const HealthNotice = styled(Card)`
    .content .p {
        margin-bottom: ${spacing.component.m};
    }
`;
