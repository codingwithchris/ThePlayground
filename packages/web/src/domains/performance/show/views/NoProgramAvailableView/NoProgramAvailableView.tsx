import React from 'react';
import {
    Section,
    Container,
    BodyText,
    Heading,
    FillButton,
    Icon,
} from '@web/ui/core';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { useLocation } from '@reach/router';
import { useGlobalPerformanceContext } from '@web/shared/context';

const StyledNoProgramView = styled(Section)`
    padding: ${spacing.layout.l} 0;
    .pre {
        margin-bottom: ${spacing.component.m};
    }
    .title {
        margin-bottom: ${spacing.layout.s};
    }
    .action {
        margin-top: ${spacing.component.l};
    }
`;

export const NoProgramAvailableView = () => {
    // Get the path of te "parent" show page, which is up one level from the program page
    const { pathname } = useLocation();
    const parts = pathname.split('/').filter((part) => part !== '');
    const showPageSlug = parts[parts.length - 2] || '';

    const { get } = useGlobalPerformanceContext();
    const { path, title } = get.show(showPageSlug) || {};

    return (
        <StyledNoProgramView>
            <Container maxWidth="s">
                <BodyText className="pre" size="m" color="medium" weight="bold">
                    {title}
                </BodyText>
                <Heading as="h1" className="title" size="m" color="light">
                    No Digital Program Available
                </Heading>
                <BodyText color="medium" size="m">
                    Huh... it looks like we couldn't automatically generate a
                    digital program for this show. If this was a collaboration,
                    it's possible another company handled the program, or we may
                    not have the right info available in our system to generate
                    it. You can still view available information for this show
                    by exploring the show feature page.
                </BodyText>

                <FillButton
                    className="action"
                    size="s"
                    color="primary"
                    to={path}
                    startIcon={
                        <Icon name="ArrowLeft" size="xs" color="light" />
                    }
                >
                    Go To Show Feature Page
                </FillButton>
            </Container>
        </StyledNoProgramView>
    );
};
