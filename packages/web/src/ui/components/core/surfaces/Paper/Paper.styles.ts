import styled from 'styled-components';
import { borders } from '@web/ui/tokens';
import { PaperProps } from './Paper.types';

export const Paper = styled.div<PaperProps>`
    background-color: ${({ theme, bgColor }) =>
        bgColor ? theme.surfaces[bgColor] : 'none'};
    border-radius: ${borders.defaultRadius};
    ${({ variant, borderColor, theme }) =>
        variant === 'outlined' &&
        borderColor &&
        `
        border: 1px solid ${theme.surfaces[borderColor]};
    `};
`;
