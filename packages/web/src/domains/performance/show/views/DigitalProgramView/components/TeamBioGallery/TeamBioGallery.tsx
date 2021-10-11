import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, Container, BodyText } from '@web/ui/core';
import { ARTIST_GROUP, ARTIST_PRONOUNS } from '@web/domains/performance/artist';
import { DigitalProgramPageProps } from '../../types';

import { ArtistHighlight } from './ArtistHighlight/ArtistHighlight';

const StyledBioGallery = styled(Section)`
    padding: ${spacing.layout.m};

    .artist-group:not(:first-child) {
        margin-top: ${spacing.layout.m};
    }

    .artist-list {
        display: flex;
    }

    .artist-highlight {
        flex: 1 0 auto;
        flex-wrap: wrap;
    }
`;

const artistGroupName = {
    [ARTIST_GROUP.ACTOR]: 'Actors',
    [ARTIST_GROUP.CREW]: 'Crew Members',
    [ARTIST_GROUP.DESIGNER]: 'Designers',
    [ARTIST_GROUP.DIRECTOR]: 'Directors',
    [ARTIST_GROUP.SHADOW]: 'Show Shadows',
};

export const TeamBioGallery = ({ artists }: TeamBioGalleryProps) => {
    // Make each artist group entry an array of arrays
    const artistsArray = Object.entries(artists);

    return (
        <StyledBioGallery bgColor="paperDark">
            <Container maxWidth="m">
                {/* TODO: ADD TITLE & INTRO HERE */}
                {artistsArray.map(([groupName, artistList]) => {
                    // Alphabetize the artists ?
                    // const alphabeticalArtistList = artistList.sort((a, b) =>
                    //     a.artist.firstName.localeCompare(b.artist.firstName)
                    // );

                    return (
                        <div className="artist-group" key={groupName}>
                            <BodyText
                                color="medium"
                                weight="bold"
                                size="s"
                                className="artist-group-heading"
                            >
                                {artistGroupName[groupName as ARTIST_GROUP]}
                            </BodyText>
                            <div className="artist-list">
                                {artistList.map((artistBio) => (
                                    <ArtistHighlight
                                        className="artist-highlight"
                                        artistBio={artistBio}
                                        key={`${artistBio.artist.lastName}-${artistBio.role}`}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </Container>
        </StyledBioGallery>
    );
};

interface TeamBioGalleryProps {
    artists: DigitalProgramPageProps['artists'];
}
