import styled from 'styled-components';
import { spacing } from '@web/ui/tokens';
import { Card } from '@web/ui/core';

export const TicketInfoCard = styled(Card)`
    .outer-title {
        margin-bottom: ${spacing.component.xs};
    }

    .outer-subtitle {
        margin-bottom: ${spacing.component.l};
    }

    .info-item-prefix {
        margin-right: ${spacing.component.xxs};
    }
`;
