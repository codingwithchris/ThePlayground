import styled from 'styled-components';

import { breakpoints, spacing } from '@tokens';

export const PosterGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${spacing.component.m};
    padding: ${spacing.component.m};

    ${breakpoints.s} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${breakpoints.l} {
        grid-template-columns: repeat(3, 1fr);
    }

    ${breakpoints.xxl} {
        grid-template-columns: repeat(4, 1fr);
    }
`;
