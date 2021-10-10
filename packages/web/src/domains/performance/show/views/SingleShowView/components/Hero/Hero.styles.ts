import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { breakpoints, spacing } from '@web/ui/tokens';

export const Hero = styled(Section)`
    align-items: stretch;
    display: flex;
    min-height: calc(100vh - ${spacing.appHeaderMobileOffset});
    position: relative;
    ${breakpoints.m} {
        min-height: 100vh;
    }

    > .content {
        align-items: center;
        display: flex;
        flex: 1;
        margin-top: -${spacing.component.xxl};
    }

    .title {
        text-transform: uppercase;
        &[data-device-scope='mobile'] {
            display: block;
            ${breakpoints.m} {
                display: none;
            }
        }
        &[data-device-scope='desktop'] {
            display: none;
            ${breakpoints.m} {
                display: block;
            }
        }
    }

    .author {
        margin-top: ${spacing.component.m};
    }
`;
