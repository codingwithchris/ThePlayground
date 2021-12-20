import React from 'react';
import styled from 'styled-components';
import { breakpoints, grid, spacing } from '@web/ui/tokens';

import { BodyText, Container, Section } from '@web/ui/core';

const StyledLongDescriptionSection = styled(Section)`
    padding: ${spacing.layout.l} 0;
`;

export const LongDescriptionSection: React.FC = () => {
    return (
        <StyledLongDescriptionSection bgColor="default" className="">
            <Container maxWidth="s">
                <BodyText size="m" color="light">
                    We are an ensemble driven theatre company working to build a
                    safe and encouraging artistic community in Dayton where
                    local artists can discover their voice and explore their
                    craft. We believe that theatre should be for everyone, which
                    is why we are always intentional about making our
                    performances accessible and affordable for all audiences. We
                    tell universally relatable stories that stick with you long
                    after you leave the theatre. Our risk-taking, immersive
                    approach exposes the human experience in its most intimate
                    form: how we can hurt each other, and how we can make each
                    other whole. Striking a nerve—it’s what we do.
                </BodyText>
            </Container>
        </StyledLongDescriptionSection>
    );
};
