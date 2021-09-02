import React from 'react';
import {
    BodyText,
    Divider,
    Heading,
    GrittyHeading,
    Container,
} from '@web/ui/core';

import * as styled from './Description.styles';

export const Description = ({ description, className }: DescriptionProps) => {
    return (
        <styled.Description className={className} bgColor="paperDark">
            <Container maxWidth="s" className="container">
                <BodyText
                    color="medium"
                    size="xs"
                    className="label"
                    weight="bold"
                >
                    ABOUT
                </BodyText>
                <BodyText color="light" size="m">
                    {description}
                </BodyText>
            </Container>
        </styled.Description>
    );
};

export interface DescriptionProps {
    className?: string;
    description?: string;
}
