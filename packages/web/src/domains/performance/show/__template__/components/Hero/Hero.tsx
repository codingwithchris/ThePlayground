import React from 'react';

import { BodyText, Container, Heading, SectionProps } from '@web/ui/core';

import { useSingleShowContext } from '../../../__context__';

import * as styled from './Hero.styles';

export const Hero: React.FC<HeroProps> = ({ bgImage, actionBar }) => {
    const { currentShow } = useSingleShowContext();

    return (
        <styled.Hero bgImage={bgImage} overlay="black65">
            <Container className="container">
                <Heading className="title" size="l" color="light">
                    {currentShow?.title || 'N/A'}
                </Heading>
                <BodyText
                    className="author"
                    size="xl"
                    color="light"
                    weight="bold"
                >
                    by {currentShow?.author.name || 'n/a'}
                </BodyText>
            </Container>
            {actionBar && actionBar}
        </styled.Hero>
    );
};

interface HeroProps extends SectionProps {
    actionBar?: JSX.Element;
}
