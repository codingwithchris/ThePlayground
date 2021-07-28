import React from 'react';
import styled, { css } from 'styled-components';
import { borders, spacing, AvailableComponentSpacing } from '@web/ui/tokens';
import { Image } from '@web/ui/core';

// TYPES
export interface CardMediaProps {}

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
export const CardMedia: React.FC<CardMediaProps> = ({ children }) => (
    <StyledCardMedia>{children}</StyledCardMedia>
);
