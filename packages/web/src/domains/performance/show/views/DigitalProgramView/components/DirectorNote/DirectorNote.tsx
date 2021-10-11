import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, PortableText, Container } from '@web/ui/core';

export const StyledDirectorNote = styled(Section)`
    p {
        margin-bottom: ${spacing.component.m};
    }
`;

export const DirectorNote = ({ content }: DirectorsNoteProps) => {
    return (
        <StyledDirectorNote>
            <Container maxWidth="s">
                <PortableText content={content} />
            </Container>
        </StyledDirectorNote>
    );
};

interface DirectorsNoteProps {
    content: any[];
}
