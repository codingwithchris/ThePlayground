import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const DatesCard = styled(InfoCard)`
    .content {
        align-items: center;
        display: flex;
    }

    .dates {
    }

    .content > svg {
        margin-right: ${spacing.component.m};
    }
`;
