import React from 'react';
import { BodyText, Heading, Container } from '@web/ui/core';

import * as styled from './ComingSoon.styles';

export const ComingSoon = ({ className }: ComingSoonProps) => {
    return (
        <styled.ComingSoon className={className}>
            <Container maxWidth="m" className="container">
                Coming Soooooon!
            </Container>
        </styled.ComingSoon>
    );
};

export interface ComingSoonProps {
    className?: string;
}
