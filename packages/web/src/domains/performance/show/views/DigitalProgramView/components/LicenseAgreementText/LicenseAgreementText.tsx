import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, BodyText, Container } from '@web/ui/core';

const StyledLicenseAgreementText = styled(Section)`
    padding: ${spacing.layout.s} 0;
`;

export const LicenseAgreementText = ({ text }: { text: string }) => {
    return (
        <StyledLicenseAgreementText bgColor="paperDark">
            <Container maxWidth="xs">
                <BodyText color="medium" size="s">
                    {text}
                </BodyText>
            </Container>
        </StyledLicenseAgreementText>
    );
};
