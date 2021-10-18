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

export const StyledHeader = styled(Section)`
    padding: ${spacing.layout.s} 0 ${spacing.layout.xs} 0;

    .logo {
        margin-bottom: ${spacing.layout.s};
        text-align: center;
    }

    .welcome {
        margin-bottom: ${spacing.component.s};
        text-align: center;
    }
    .show {
        text-align: center;
    }
`;

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
        .map((director) => `${director.name}`)
        .join(' + ');

    return (
        <StyledHeader>
            <Container>
                <div className="logo">
                    <Logo size="l" type="Lockup" color="light" />
                </div>
                <div className="welcome">
                    <BodyText color="medium" size="s" weight="bold">
                        Welcome to...
                    </BodyText>
                </div>
                <div className="show">
                    <BodyText
                        size="xl"
                        color="light"
                        className="title"
                        weight="bold"
                    >
                        {title}
                    </BodyText>
                    <BodyText size="m" color="medium">
                        by {author.name}
                    </BodyText>
                </div>
                {/* <div className="directors">
                    <BodyText size="s" color="light">
                        Directed by: {directedBy}
                    </BodyText>
                </div> */}
            </Container>
        </StyledHeader>
    );
};

interface HeaderProps {
    title: string;
    author: ShowAuthor;
    directors: ArtistBio[];
}
