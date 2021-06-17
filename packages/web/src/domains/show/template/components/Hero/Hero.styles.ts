import styled from 'styled-components';
import { Section } from '@web/core/components';
import { rgba } from 'polished';

import { spacing } from '@web/core/tokens';

export const Hero = styled(Section)`
    align-items: stretch;
    display: flex;
    min-height: 100vh;
    position: relative;

    .content {
        align-items: center;
        display: flex;
        flex: 1;
        margin-top: -${spacing.component.xxl};
    }

    .title {
        text-transform: uppercase;
    }

    .author {
        margin-top: ${spacing.component.m};
    }
`;
