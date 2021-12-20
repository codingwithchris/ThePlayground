import React from 'react';
import styled from 'styled-components';

import {
    Heading,
    BodyText,
    List,
    ListItem,
    Section,
    Container,
    Icon,
} from '@web/ui/core';
import { breakpoints, grid, spacing } from '@web/ui/tokens';
import { DonateForm } from '@web/ui/molecules';

const sectionBreakpoint = breakpoints.m;

const StyledDonateSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .container {
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        ${sectionBreakpoint} {
            flex-direction: row;
        }
    }

    .content,
    .form {
        flex: 1;
    }

    .form {
        height: 100%;
        max-width: 100%;
        margin: 0;
    }

    .content {
        margin-bottom: ${spacing.layout.m};
        ${sectionBreakpoint} {
            margin-bottom: 0;
        }
    }

    .content .title {
        margin-bottom: ${spacing.component.l};
    }

    .content .donation-levels-list {
        margin-bottom: ${spacing.component.l};
        margin-top: ${spacing.component.m};
    }

    .content .cta {
        margin-top: ${spacing.component.m};
    }

    .sponsorship-opportunities {
        margin-top: ${spacing.layout.m};
    }
`;

const donationLevels = [
    <>
        <strong>$25</strong> will pay for a script for 2 artists.
    </>,
    <>
        <strong>$75</strong> will cover the cost of renting a single light for 1
        week.
    </>,
    <>
        <strong>$150</strong> will cover the cost of rights for one performance.
    </>,
    <>
        <strong>$250</strong> will go towards paying an artist's stipend.
    </>,
];

export const DonateSection = () => (
    <StyledDonateSection bgColor="default">
        <Container className="container" maxWidth="l">
            <div className="content">
                <div className="title">
                    <Heading color="light" size="xs" as="h3">
                        It takes a fuckin’ village y’all
                    </Heading>
                </div>
                <div className="copy">
                    <BodyText color="medium" size="m">
                        With your generous support, we can put more money in an
                        artist’s pocket, keep creating our brand of raw, real
                        and relevant theatre, and build the kind of artistic
                        community that Dayton deserves.
                    </BodyText>
                    <List
                        itemSpacing="xs"
                        className="donation-levels-list"
                        heading={
                            <BodyText color="light" size="m" weight="bold">
                                Every little bit helps. Check out how far your
                                donation can go:
                            </BodyText>
                        }
                    >
                        {donationLevels.map((text, index) => (
                            <ListItem key={`donation-levels-${index}`}>
                                <Icon
                                    name="CircleRight"
                                    size="xs"
                                    color="light"
                                />
                                <BodyText size="m" color="medium">
                                    {text}
                                </BodyText>
                            </ListItem>
                        ))}
                    </List>
                    <BodyText
                        color="accent"
                        size="m"
                        weight="bold"
                        className="cta"
                    >
                        Become a donor today.
                    </BodyText>
                </div>
            </div>
            <DonateForm campaignID="grassroots-support-fund" className="form" />
        </Container>
        <Container maxWidth="s">
            <BodyText
                color="medium"
                size="m"
                className="sponsorship-opportunities"
            >
                * If you are an individual or businesses who wants to contribute
                more than $500 per season, reach out to us at{' '}
                <strong>sponsorship@nervetheatre.org</strong> to discuss
                sponsorship opportunities.
            </BodyText>
        </Container>
    </StyledDonateSection>
);
