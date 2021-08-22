import { Card } from '@web/ui/core';
import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

export const LocationCard = styled(Card)`
    .label {
        margin-bottom: ${spacing.component.m};
    }

    .header {
        align-items: center;
        display: flex;
        margin-bottom: ${spacing.component.xs};
    }

    .header > svg {
        margin-right: ${spacing.component.xs};
    }

    .address {
        margin-bottom: ${spacing.component.s};
    }
`;
