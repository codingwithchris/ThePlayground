import styled from 'styled-components';
import { spacing } from '@web/ui/tokens';

export const SeriesInfo = styled.div`
    max-width: 350px;

    svg {
        margin-bottom: ${spacing.component.xxs};
    }

    > .series-title {
        margin-bottom: ${spacing.component.xxs};
    }
`;
