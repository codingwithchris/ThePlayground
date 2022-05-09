import React from 'react';
import styled from 'styled-components';
import {
    GrittyHeading,
    BodyText,
    Section,
    Container,
    PortableText,
    YoutubeVideo,
    Divider,
    Heading,
} from '@web/ui/core';
import { SpotifyEmbed } from '@web/ui/molecules';

import { spacing, breakpoints } from '@web/ui/tokens';
import { Link } from '@web/domains/app/routing';

const StyledTrailerSection = styled(Section)`
    padding: ${spacing.layout.l} 0 ${spacing.layout.m};

    .title {
        margin-bottom: ${spacing.component.l};
    }

    .copy {
        margin-bottom: ${spacing.layout.s};
    }

    .credit {
        padding: ${spacing.component.l} 0;
        text-align: center;

        a {
            text-decoration: underline;
            color: ${({ theme }) => theme.typography.light};
        }
    }
`;

export const TheSound = ({ playlistLink, credit }: TheSoundProps) => {
    return (
        <StyledTrailerSection bgColor="paperDark">
            <Container maxWidth="s">
                <GrittyHeading
                    className="title"
                    size="xs"
                    color="dark"
                    bgColor="neutralLight"
                >
                    The Sound
                </GrittyHeading>
                <BodyText className="copy" color="medium" size="m">
                    Music has always been important at The Nerve and creating
                    unique soundtracks for our shows is something we've always
                    put a lot of thought into. Whether it's a transition during
                    the show, or pre/post-show music, each song is carefully
                    chosen to help set the mood and tell the story.
                </BodyText>

                <SpotifyEmbed playlistLink={playlistLink} />
                <BodyText color="medium" size="xs" className="credit">
                    {credit ||
                        'This soundtrack was created by Jenna Valyn, Music Supervisor'}
                </BodyText>
            </Container>
        </StyledTrailerSection>
    );
};

interface TheSoundProps {
    playlistLink: string;
    credit?: string;
}
