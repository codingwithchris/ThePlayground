import styled, { css } from 'styled-components';

import {
    animation,
    borders,
    breakpoints,
    spacing,
    zIndex,
} from '@web/ui/tokens';

import { Card } from '@web/ui/core';

export const ShowSnapshotCard = styled(Card)`
    .dates {
        margin-bottom: ${spacing.component.l};
    }

    .teaser {
        margin-bottom: ${spacing.component.xxl};
    }

    .media-wrapper {
        height: 200px;
        ${breakpoints.xs} {
            height: 300px;
        }
    }

    &[data-archived='true'] {
        filter: grayscale(1);
    }
`;
