import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, PortableText, Container, BodyText } from '@web/ui/core';

export const StyledDirectorNote = styled(Section)`
    padding: ${spacing.layout.s} 0;

    p {
        margin-bottom: ${spacing.component.l};
    }
`;

export const DirectorNote = ({ content }: DirectorsNoteProps) => {
    return (
        <StyledDirectorNote>
            <Container maxWidth="s">
                <BodyText
                    className="label"
                    color="medium"
                    size="s"
                    weight="bold"
                >
                    directors note
                </BodyText>
                <PortableText
                    content={content}
                    config={{ block: { bodyText: { size: 'm' } } }}
                />
            </Container>
        </StyledDirectorNote>
    );
};

interface DirectorsNoteProps {
    content: any[];
}
