import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Location } from '@web/domains/performance/location';
import { Section, BodyText, Container, Icon } from '@web/ui/core';

const StyledLandAcknowledgement = styled(Section)`
    padding: ${spacing.layout.s} 0;
    .title {
        display: flex;
        align-items: center;
        margin-bottom: ${spacing.component.s};
        svg {
            margin-right: ${spacing.component.s};
        }
    }
`;

export const LandAcknowledgement = ({
    indigenousLandAcknowledgement,
    address,
    title,
}: Location) => {
    return (
        <StyledLandAcknowledgement bgColor="paperDark">
            <Container maxWidth="xs">
                <BodyText
                    className="title"
                    color="light"
                    size="m"
                    weight="bold"
                >
                    <Icon name="Tree" size="m" />
                    Indigenous Land Acknowledge
                </BodyText>
                <BodyText color="medium" size="s">
                    The land the {title} in {address.city}, {address.state} is
                    built upon is home to the following indigenous tribes:{' '}
                    {indigenousLandAcknowledgement}
                </BodyText>
            </Container>
        </StyledLandAcknowledgement>
    );
};
