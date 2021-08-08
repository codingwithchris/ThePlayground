import styled from 'styled-components';
import { Section } from '@web/ui/core';
import {
    breakpoints,
    spacing,
    containerGutter,
    totalContainerGutter,
} from '@web/ui/tokens';

export const Performances = styled(Section)<{ performancesCount: number }>`
    --gutter-width: ${spacing.component.s};
    --scroll-padding: ${spacing.component.m};
    --total-container-gutter: ${totalContainerGutter}%;
    --list-margin-correction: -${containerGutter}%;
    --list-item-outer-margin: ${containerGutter}%;
    --list-item-width: 190px;
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
        align-items: center;
        display: flex;
        list-style: none;
        margin-left: var(--list-margin-correction);
        margin-right: var(--list-margin-correction);
        min-width: 100%;
        overflow-x: auto;
        scroll-padding: var(--scroll-padding);
        -webkit-overflow-scrolling: touch;

        ${breakpoints.s} {
            display: grid;
            grid-gap: var(--gutter-width);
            grid-template-columns: repeat(4, 1fr);
            grid-auto-flow: row;
        }

        ${breakpoints.l} {
            grid-template-columns: repeat(5, 1fr);
        }

        li {
            flex: 1 0 var(--list-item-width);
            position: relative;
        }
        li:not(:first-child) {
            margin-left: calc(var(--gutter-width) / 2);
        }
        li:not(:last-child) {
            margin-right: calc(var(--gutter-width) / 2);
        }

        li:first-child {
            margin-left: var(--list-item-outer-margin);
        }

        li:last-child:after {
            content: '';
            height: 1px;
            left: 100%;
            position: absolute;
            top: 0px;
            width: var(--total-container-gutter);
        }
    }
`;
