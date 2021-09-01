import React from 'react';
import {
    BodyText,
    Divider,
    Heading,
    GrittyHeading,
    Container,
} from '@web/ui/core';
import { useSingleSeasonContext } from '../../../__context__';

import * as styled from './Hero.styles';

export const Hero = ({ title, tagline, description, className }: HeroProps) => {
    // TODO: Build this method -- what number season is this out of the total?
    const { seasonPosition } = useSingleSeasonContext();

    return (
        <styled.Hero className={className}>
            <Container maxWidth="l" className="container">
                <BodyText
                    size="m"
                    weight="bold"
                    color="medium"
                    className="season-count"
                >
                    [ 07. ]
                </BodyText>
                <GrittyHeading
                    bgColor="neutralLight"
                    size="m"
                    color="dark"
                    className="title"
                    offset={-1}
                    as="h1"
                >
                    Our {title} Season
                </GrittyHeading>
                {tagline && (
                    <BodyText
                        size="xl"
                        color="light"
                        className="tagline"
                        as="h2"
                    >
                        {tagline}
                    </BodyText>
                )}
            </Container>
        </styled.Hero>
    );
};

export interface HeroProps {
    className?: string;
    title: string;
    tagline?: string;
}
