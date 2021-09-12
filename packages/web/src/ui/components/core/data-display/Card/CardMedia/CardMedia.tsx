import React from 'react';
import styled from 'styled-components';
import { borders } from '@web/ui/tokens';
import { Image } from '@web/ui/core';

// STYLES
export const StyledCardMedia = styled.div<CardMediaProps>`
    overflow: hidden;
    position: relative;
    img {
        border-top-right-radius: ${borders.defaultRadius};
        border-top-left-radius: ${borders.defaultRadius};
    }
`;

// COMPONENT DEFINITION
export const CardMedia: React.FC<CardMediaProps> = ({
    className,
    children,
}) => <StyledCardMedia className={className}>{children}</StyledCardMedia>;

// TYPES
export interface CardMediaProps {
    className?: string;
}
