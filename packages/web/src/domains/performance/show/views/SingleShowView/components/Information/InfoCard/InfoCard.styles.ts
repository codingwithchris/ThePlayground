import { Card } from '@web/ui/core';
import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

export const InfoCard = styled(Card)`
    .label {
        align-items: center;
        display: flex;
        margin-bottom: ${spacing.component.l};
    }

    .label > .text {
        margin-right: ${spacing.component.m};
    }

    .label > .separator {
        height: 1px;
        flex: 1;
        background: ${({ theme }) => theme.surfaces.neutralDark};
    }
`;
