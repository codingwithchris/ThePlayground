import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import {
    Avatar,
    Divider,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Section,
    Container,
    BodyText,
    FillButton,
    OutlineButton,
    Icon,
} from '@web/ui/core';

const StyledSpotifyCallout = styled(Section)`
    padding: ${spacing.layout.m} 0;
`;

export const SpotifyCallout = () => {
    return (
        <StyledSpotifyCallout bgColor="paperDark">
            <Container maxWidth="xs">
                <Card>
                    <CardHeader
                        verticalSpacing="s"
                        avatar={
                            <Avatar size="m">
                                <Icon name="Spotify" color="light" size="l" />
                            </Avatar>
                        }
                    >
                        <BodyText color="light" size="m" weight="bold">
                            Dig the sound?
                        </BodyText>
                    </CardHeader>

                    <CardContent>
                        <BodyText color="light" size="s">
                            Check out our official Spotify Playlist for the show
                            and access all of our past playlists from our
                            profile.
                        </BodyText>
                    </CardContent>
                    <CardActions>
                        <FillButton
                            to="https://open.spotify.com/playlist/0XO6XzjrklC2k5eMSoqs3g?si=ff783a52d73a409a"
                            size="xs"
                            color="tertiary"
                        >
                            Official Playlist
                        </FillButton>
                        <OutlineButton
                            to="https://open.spotify.com/user/theplaygroundtheatre?si=a97c4fa039b34ceb"
                            size="xs"
                            color="tertiary"
                        >
                            Our Profile
                        </OutlineButton>
                    </CardActions>
                </Card>
            </Container>
        </StyledSpotifyCallout>
    );
};
