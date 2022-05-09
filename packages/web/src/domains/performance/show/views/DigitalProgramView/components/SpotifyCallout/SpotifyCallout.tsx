import React from 'react';
import styled from 'styled-components';

import { useConfigContext } from '@web/shared/context';

import { spacing } from '@web/ui/tokens';
import {
    Avatar,
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

export const SpotifyCallout: React.FC<SpotifyCalloutPros> = ({
    playlistLink,
}) => {
    const { company } = useConfigContext();
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
                            to={playlistLink}
                            size="xs"
                            color="tertiary"
                        >
                            Official Playlist
                        </FillButton>
                        <OutlineButton
                            to={company.spotify}
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

interface SpotifyCalloutPros {
    playlistLink: string;
}
