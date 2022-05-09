import React from 'react';
import styled from 'styled-components';
import { BodyText, Section, Container, Divider, Icon } from '@web/ui/core';
import { Link } from '@web/domains/app/routing';
import { spacing, breakpoints, animation } from '@web/ui/tokens';
import { useConfigContext } from '@web/shared/context';

const StyledArchivesSection = styled(Section)`
    .archive-link {
        display: block;
        padding: ${spacing.layout.xs} 0;
        text-align: center;
        transition: ${animation.linkHover};
        ${breakpoints.m} {
            padding: ${spacing.layout.xs} 0;
        }
        &:hover {
            opacity: 0.75;
            transform: scale(0.95);
        }
    }
    .text {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            margin-left: ${spacing.component.s};
        }
    }
`;

export const TheArchives = () => {
    const { links } = useConfigContext();
    return (
        <StyledArchivesSection bgColor="paperDark">
            <Divider color="neutralDark" />
            <Link className="archive-link" to={links.archivePage}>
                <Container maxWidth="s">
                    <BodyText
                        className="text"
                        color="medium"
                        weight="bold"
                        size="s"
                    >
                        View full archive of all shows
                        <Icon name="CircleRight" size="s" />
                    </BodyText>
                </Container>
            </Link>
        </StyledArchivesSection>
    );
};
