import React from 'react';

import { BodyText, Container, Heading, SectionProps } from '@web/ui/core';

import * as styled from './Hero.styles';

// TODO: Swap out the standard BG image here for a branded bg image
export const Hero: React.FC<HeroProps> = ({
    title,
    author,
    bgImage,
    actionBar,
}) => {
    return (
        <styled.Hero bgImage={bgImage} overlay="black65">
            <Container className="container">
                <Heading
                    className="title"
                    size="l"
                    color="light"
                    as="h1"
                    data-device-scope="desktop"
                >
                    {title || 'N/A'}
                </Heading>
                <Heading
                    className="title"
                    size="m"
                    color="light"
                    as="h1"
                    data-device-scope="mobile"
                >
                    {title || 'N/A'}
                </Heading>
                <BodyText
                    className="author"
                    size="xl"
                    color="medium"
                    weight="bold"
                >
                    by {author || 'n/a'}
                </BodyText>
            </Container>
            {actionBar && actionBar}
        </styled.Hero>
    );
};

interface HeroProps extends SectionProps {
    actionBar?: JSX.Element;
    title: string;
    author?: string;
}
