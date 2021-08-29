import styled from 'styled-components';
import { spacing, borders } from '@web/ui/tokens';

import { TagProps } from './Tag.types';

const sizes = {
    xs: `${spacing.component.xxs} ${spacing.component.xxs}`,
    s: `${spacing.component.xxs} ${spacing.component.xs}`,
    m: `${spacing.component.xxs} ${spacing.component.s}`,
};

const mediaSpacingSize = {
    xs: `${spacing.component.xxs}`,
    s: `${spacing.component.xs}`,
    m: `${spacing.component.s}`,
};

export const Tag = styled.div<Omit<TagProps, 'text' | 'media' | 'textWeight'>>`
    align-items: center;
    background-color: ${({ theme, bgColor }) => theme.surfaces[bgColor]};
    border: 1px solid;
    border-color: ${({ theme, borderColor }) => theme.surfaces[borderColor]};
    border-radius: ${borders.defaultRadius};
    color: ${({ theme, color }) => theme.typography[color]};
    display: inline-flex;
    padding: ${({ size }) => sizes[size]};

    .media {
        line-height: 0;
    }

    svg {
        margin-right: ${({ size }) => mediaSpacingSize[size]};
        flex-shrink: 0;
    }

    &.--full-width {
        display: flex;
        justify-content: center;
    }
`;
