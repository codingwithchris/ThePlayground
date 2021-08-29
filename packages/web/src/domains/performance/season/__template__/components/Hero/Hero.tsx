import React from 'react';
import { BodyText, Heading, GrittyHeading, Container } from '@web/ui/core';

import * as styled from './Hero.styles';

export const Hero = ({ title, tagline, className }: HeroProps) => {
    return (
        <styled.Hero className={className}>
            <Container maxWidth="m" className="container">
                <Heading size="xs" color="medium" className="tagline" as="p">
                    [ {tagline} ]
                </Heading>
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
            </Container>
        </styled.Hero>
    );
};

export interface HeroProps {
    className?: string;
    title: string;
    tagline?: string;
}
