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
            <Container maxWidth="m">
                <BodyText size="l" color="light">
                    We are an ensemble theatre company that isn't afraid to cut
                    through the bullshit to uncover the messy parts of life. We
                    tell raw, real, and relevant stories that stick with you
                    long after you leave the theatre. Our risk-taking, immersive
                    approach exposes the human experience in its most intimate
                    form: how we can hurt each other and how we make each other
                    whole. If you feel conflicted, uncomfortable, or
                    introspective after spending a couple hours with our
                    stories, we've done our job. Striking a nerve—it's what we
                    do.
                </BodyText>
            </Container>
        </StyledLongDescriptionSection>
    );
};
