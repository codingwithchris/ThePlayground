import React from 'react';
import styled from 'styled-components';

// TYPES
export interface ListItemProps {
    className?: string;
}

// STYLES
export const StyledListItem = styled.li`
    align-items: center;
    display: flex;
    width: 100%;
    overflow: hidden;
    padding: var(--list-item-spacing) var(--list-gutter);

    i {
        margin-right: var(--list-item-icon-spacing);
    }
`;

// COMPONENT DEFINITION
export const ListItem: React.FC<ListItemProps> = ({ className, children }) => {
    return <StyledListItem className={className}>{children}</StyledListItem>;
};
