import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, PortableText, Container } from '@web/ui/core';

export const StyledDirectorNote = styled(Section)``;

export const DirectorNote = ({ content }: DirectorsNoteProps) => {
    return (
        <StyledDirectorNote>
            <Container>
                <PortableText content={content} />
            </Container>
        </StyledDirectorNote>
    );
};

interface DirectorsNoteProps {
    content: any[];
}
