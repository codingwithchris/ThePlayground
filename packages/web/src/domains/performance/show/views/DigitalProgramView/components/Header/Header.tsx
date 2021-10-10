import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import {
    BodyText,
    Icon,
    Container,
    Section,
    Logo,
    TextButton,
    Heading,
} from '@web/ui/core';
import { composeArtistName } from '@web/domains/performance/artist';
import { ShowAuthor } from '../../../../types';
import { ArtistBio } from '../../types';

export const StyledHeader = styled(Section)``;

export const Header = ({ title, author, directors }: HeaderProps) => {
    const preparedDirectorData = directors.map(({ artist, role }) => ({
        role,
        name: composeArtistName({
            first: artist.firstName,
            middle: artist.middleName,
            last: artist.lastName,
        }),
    }));

    const directedBy = preparedDirectorData
        .map((director) => `${director.name} [${director.role}]`)
        .join(' + ');

    return (
        <StyledHeader>
            <Container>
                <div className="logo">
                    <Logo size="l" type="Lockup" color="light" />
                </div>
                <div className="welcome">
                    <Heading color="medium" size="xs">
                        Welcome to the Show
                    </Heading>
                </div>
                <div className="show">
                    <Heading
                        size="s"
                        color="light"
                        textTransform="uppercase"
                        className="title"
                    >
                        {title}
                    </Heading>
                    <BodyText size="l" color="medium" weight="bold">
                        by {author.name}
                    </BodyText>
                </div>
                <div className="directors">
                    <BodyText size="s" color="light">
                        Directed by: {directedBy}
                    </BodyText>
                </div>
            </Container>
        </StyledHeader>
    );
};

interface HeaderProps {
    title: string;
    author: ShowAuthor;
    directors: ArtistBio[];
}
