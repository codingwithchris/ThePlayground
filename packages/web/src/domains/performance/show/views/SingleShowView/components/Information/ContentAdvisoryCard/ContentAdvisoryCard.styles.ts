import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const ContentAdvisoryCard = styled(InfoCard)`
    .rating-group {
        align-items: center;
        display: inline-flex;
        flex-wrap: wrap;

        .prefix {
            margin-right: ${spacing.component.xs};
        }

        .rating {
            margin-right: ${spacing.component.xs};
        }
    }

    .advisory {
        align-items: center;
        display: flex;

        svg {
            margin-right: ${spacing.component.xs};
            position: relative;
            top: -1px;
        }
    }
`;
