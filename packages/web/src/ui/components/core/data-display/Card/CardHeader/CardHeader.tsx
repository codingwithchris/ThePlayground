import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@web/ui/tokens';

// TYPES
export interface CardHeaderProps {
    avatar?: JSX.Element;
    action?: JSX.Element;
    verticalSpacing?: AvailableComponentSpacing;
    disableSpacing?: true;
    className?: string;
}

// STYLES
export const StyledCardHeader = styled.div<
    Pick<CardHeaderProps, 'disableSpacing' | 'verticalSpacing'>
>`
    --card-header-y-gutter: var(--card-spacing);
    --card-header-x-gutter: var(--card-spacing);

    align-items: center;
    display: flex;

    ${({ verticalSpacing }) =>
        verticalSpacing &&
        css`
            --card-header-y-gutter: ${spacing.component[verticalSpacing!]};
        `};

    ${({ disableSpacing }) =>
        !disableSpacing &&
        css`
            padding: var(--card-header-y-gutter) var(--card-header-x-gutter);
        `};
`;

// COMPONENT DEFINITION
export const CardHeader: React.FC<CardHeaderProps> = ({
    verticalSpacing,
    disableSpacing,
    avatar,
    action,
    className,
    children,
}) => (
    <StyledCardHeader
        verticalSpacing={verticalSpacing}
        disableSpacing={disableSpacing}
        className={className}
    >
        {avatar && <div className="avatar">{avatar}</div>}
        <div className="copy">{children}</div>
        {action && <div className="action">{action}</div>}
    </StyledCardHeader>
);
