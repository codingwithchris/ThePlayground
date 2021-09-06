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

export const Hero = ({ title, tagline, className }: HeroProps) => {
    const { currentSeason } = useSingleSeasonContext();

    const seasonNumberDisplay = String(currentSeason?.number).padStart(2, '0');

    return (
        <styled.Hero className={className}>
            <Container maxWidth="l" className="container">
                {currentSeason?.number && (
                    <BodyText
                        size="m"
                        weight="bold"
                        color="medium"
                        className="season-count"
                    >
                        [ S.{seasonNumberDisplay} ]
                    </BodyText>
                )}
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
