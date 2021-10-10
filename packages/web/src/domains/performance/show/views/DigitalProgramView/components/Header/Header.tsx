import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, Logo } from '@web/ui/core';

export const StyledHeader = styled(Section)``;

export const Header = () => {
    return <StyledHeader>Hello from the header!</StyledHeader>;
};
