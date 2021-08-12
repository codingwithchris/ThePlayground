import styled from 'styled-components';
import { spacing } from '@web/ui/tokens';

export const SeriesInfo = styled.div`
    max-width: 300px;

    svg {
        margin-bottom: ${spacing.component.s};
    }

    > .title {
        margin-bottom: ${spacing.component.xxs};
    }
`;
