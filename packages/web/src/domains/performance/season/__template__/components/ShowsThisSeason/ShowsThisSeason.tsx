import React from 'react';
import { Container } from '@web/ui/core';

import * as styled from './ShowsThisSeason.styles';

export const ShowsThisSeason: React.FC<ShowsThisSeasonProps> = ({
    className,
    children,
}) => {
    return (
        <styled.ShowsThisSeason className={className}>
            <Container maxWidth="m" className="container">
                {children}
            </Container>
        </styled.ShowsThisSeason>
    );
};

export interface ShowsThisSeasonProps {
    className?: string;
}
