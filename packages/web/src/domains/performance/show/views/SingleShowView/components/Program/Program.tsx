import React from 'react';
import styled from 'styled-components';
import {
    Heading,
    BodyText,
    Section,
    Container,
    Icon,
    OutlineButton,
} from '@web/ui/core';
import { spacing, breakpoints } from '@web/ui/tokens';

const StyledProgramSection = styled(Section)`
    padding: ${spacing.layout.m} 0;
    ${breakpoints.m} {
        padding: ${spacing.layout.l} 0;
    }
    .title {
        display: flex;
        align-items: center;
        margin-bottom: ${spacing.component.m};
        svg {
            margin-right: ${spacing.component.m};
        }
    }

    .action {
        margin-top: ${spacing.component.l};
    }
`;

export const Program = () => {
    return (
        <StyledProgramSection>
            <Container maxWidth="xs">
                <Heading as="h3" color="light" size="xs" className="title">
                    <Icon name="Book" size="l" color="light" />
                    Digital Program
                </Heading>
                <BodyText color="medium" size="m">
                    Get to know the creative team behind the show. From cast &
                    crew bios, to directors notes, sponsors, and more! Take a
                    deep dive with our digital program.
                </BodyText>
                <OutlineButton
                    className="action"
                    to="program"
                    size="s"
                    color="tertiary"
                    endIcon={
                        <Icon name="ArrowRight" size="xxs" color="light" />
                    }
                    animateIconOnHover
                    animateOnClick
                    noNewTab
                >
                    View Program
                </OutlineButton>
            </Container>
        </StyledProgramSection>
    );
};
