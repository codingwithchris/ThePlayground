import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const EffectsAdvisoryCard = styled(InfoCard)`
    .copy {
        margin-top: ${spacing.component.xs};
    }
`;
