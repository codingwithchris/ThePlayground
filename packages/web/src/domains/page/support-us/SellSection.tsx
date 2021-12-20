import React from 'react';
import styled from 'styled-components';

import whiteGrit from '@web/assets/grit-white.png';
import blackGrit from '@web/assets/grit-black.png';

import {
    Heading,
    GrittyHeading,
    BodyText,
    Section,
    Container,
    Divider,
    Icon,
    List,
    ListItem,
} from '@web/ui/core';
import { breakpoints, grid, spacing, zIndex } from '@web/ui/tokens';

const StyledSellSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    ${breakpoints.m} {
        padding: ${spacing.layout.xl} 0;
    }

    &:before,
    &:after {
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: ${zIndex.base};
    }

    &:before {
        background-size: 800px;
        background-image: url(${blackGrit});
    }

    &:after {
        background-size: 800px;
        background-image: url(${whiteGrit});
    }

    .intro {
        margin-bottom: ${spacing.layout.m};
    }

    .innovation {
        margin-top: ${spacing.layout.m};
    }
    .innovation > .title {
        margin-bottom: ${spacing.layout.m};
    }

    .innovation > .list {
        margin-top: ${spacing.component.m};
    }
`;

export const SellSection = () => (
    <StyledSellSection bgColor="neutralLight">
        <Container maxWidth="m" className="intro">
            <BodyText size="xl" color="dark">
                Strike a nerve with us. Join us on our mission to create a new
                and exciting artistic community in Dayton.
            </BodyText>
        </Container>
        <Divider color="neutralDark" />
        <Container maxWidth="m" className="innovation">
            <GrittyHeading
                color="light"
                bgColor="paper"
                size="s"
                offset={-1}
                as="h2"
                className="title"
            >
                Our unfiltered storytelling style + experimentation = Innovation
            </GrittyHeading>
            <BodyText color="dark" size="l" weight="bold">
                What does that “innovation” really mean for Dayton?
            </BodyText>
            <List itemSpacing="xxs" className="list">
                <ListItem key="donor-sell-1">
                    <Icon name="Fire" size="s" color="accent" />
                    <BodyText size="m" color="dark">
                        Opportunities for new voices and new perspectives to be
                        shared and heard
                    </BodyText>
                </ListItem>
                <ListItem key="donor-sell-2">
                    <Icon name="Fire" size="s" color="accent" />
                    <BodyText size="m" color="dark">
                        Opportunities for artists to work on unique and
                        challenging material
                    </BodyText>
                </ListItem>
                <ListItem key="donor-sell-3">
                    <Icon name="Fire" size="s" color="accent" />
                    <BodyText size="m" color="dark">
                        Opportunities for artists to be properly valued for the
                        work they do
                    </BodyText>
                </ListItem>
                <ListItem key="donor-sell-4">
                    <Icon name="Fire" size="s" color="accent" />
                    <BodyText size="m" color="dark">
                        Opportunities for audiences to discover new artistic
                        experiences
                    </BodyText>
                </ListItem>
            </List>
        </Container>
    </StyledSellSection>
);
