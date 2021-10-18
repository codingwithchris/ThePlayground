import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, Container, BodyText } from '@web/ui/core';
import { ARTIST_GROUP, ARTIST_PRONOUNS } from '@web/domains/performance/artist';
import { DigitalProgramPageProps } from '../../types';

import { ArtistHighlight } from './ArtistHighlight/ArtistHighlight';

const StyledBioGallery = styled(Section)`
    --gap: ${spacing.component.m};
    padding: ${spacing.layout.m} 0;

    .intro-copy {
        .desktop {
            display: none;
        }
        ${breakpoints.m} {
            .desktop {
                display: inline-block;
            }
            .mobile {
                display: none;
            }
        }
    }

    .artist-group:not(:first-child) {
        margin-top: ${spacing.layout.m};
    }

    .artist-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: var(--gap);
        margin-top: ${spacing.layout.xs};
        ${breakpoints.s} {
            flex-direction: row;
        }
    }

    .artist-highlight {
        flex: 1 0 100%;
        ${breakpoints.s} {
            flex: 0 0 calc(50% - (var(--gap) / 2));
        }
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
                <BodyText color="light" size="m" className="intro-copy">
                    <span className="desktop">Click</span>
                    <span className="mobile">Tap</span> on an artist to view
                    their bio.
                </BodyText>
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
