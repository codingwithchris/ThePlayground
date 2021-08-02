import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { breakpoints, spacing, grid } from '@web/ui/tokens';

export const Performances = styled(Section)<{ performancesCount: number }>`
    --gutter-width: ${spacing.component.s};
    --scroll-padding: ${spacing.component.m};
    --list-gutter: 3.5%;
    --totalPerformances: ${(props) => props.performancesCount};

    padding: ${spacing.layout.m} 0;

    ${breakpoints.s} {
        padding: ${spacing.layout.l} 0;
    }

    .lead-in {
        margin-bottom: ${spacing.layout.s};
    }

    .lead-in .remaining {
        margin-top: ${spacing.component.s};
    }

    .performances-list {
        display: grid;
        grid-gap: var(--gutter-width);
        grid-template-columns:
            var(--list-gutter) repeat(var(--totalPerformances), 200px)
            var(--list-gutter);
        height: 100%;
        list-style: none;
        margin-left: -3.5%;
        margin-right: -3.5%;
        min-width: 100% !important;
        overflow: auto clip;
        scroll-snap-type: x mandatory;
        scroll-padding: var(--scroll-padding);
        -webkit-overflow-scrolling: touch;

        ${breakpoints.s} {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-auto-flow: row;
        }

        ${breakpoints.l} {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        li {
            scroll-snap-align: start;
            scroll-snap-stop: always;
        }
    }

    .performances-list:before,
    .performances-list:after {
        content: '';
        ${breakpoints.s} {
            content: none;
        }
    }
`;
