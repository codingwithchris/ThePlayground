import React from 'react';
import { BodyText, Container } from '@web/ui/core';

import * as styled from './ShowsThisSeason.styles';

export const ShowsThisSeason: React.FC<ShowsThisSeasonProps> = ({
    className,
    children,
}) => {
    return (
        <styled.ShowsThisSeason className={className}>
            <Container maxWidth="l" className="container">
                <BodyText color="medium" size="m">
                    Select a show for detailed info + tickets
                </BodyText>
                {children}
            </Container>
        </styled.ShowsThisSeason>
    );
};

export interface ShowsThisSeasonProps {
    className?: string;
}
