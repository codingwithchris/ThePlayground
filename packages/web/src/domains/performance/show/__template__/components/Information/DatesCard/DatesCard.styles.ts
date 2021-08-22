import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const DatesCard = styled(InfoCard)`
    .date {
        align-items: center;
        display: flex;
    }

    .date > svg {
        margin-right: ${spacing.component.s};
    }

    .content > svg {
        margin-right: ${spacing.component.m};
    }
`;
