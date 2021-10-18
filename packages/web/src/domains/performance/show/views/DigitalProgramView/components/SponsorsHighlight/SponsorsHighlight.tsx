import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Section,
    Container,
    BodyText,
    List,
    ListItem,
    Icon,
    OutlineButton,
    FillButton,
    Modal,
    CloseOverlay,
} from '@web/ui/core';
import { SocialShareModal } from '@web/ui/molecules';
import { useOverlay } from '@web/shared/hooks';
import { useConfigContext } from '@web/shared/context';
import { useSingleShowContext } from '@web/domains/performance/show';

const StyledSponsors = styled(Section)`
    padding: ${spacing.layout.m} 0;

    .title {
        margin-bottom: ${spacing.component.xl};
    }

    .sponsor-list {
        margin-top: ${spacing.component.m};
    }

    .sponsor-level {
        margin-top: ${spacing.component.xl};
    }

    .support-us {
        margin-top: ${spacing.layout.m};
    }

    .support-us-list {
        margin-top: ${spacing.component.m};
    }
`;

export const SponsorsHighlight = () => {
    const { links, company } = useConfigContext();
    const { currentShow } = useSingleShowContext();

    const fullShowURL = `${company.website}${currentShow?.path}`;

    return (
        <StyledSponsors>
            <Container className="sponsors" maxWidth="xs">
                <BodyText
                    size="s"
                    color="medium"
                    weight="bold"
                    className="title"
                >
                    sponsors + support
                </BodyText>
                <div className="sponsor-level be-bold">
                    <BodyText className="intro" size="m" color="light">
                        We would like to thank our <strong>#BeBold</strong>{' '}
                        sponsors for making this season possible.
                    </BodyText>
                    <List className="sponsor-list" itemSpacing="xxs">
                        <ListItem className="sponsor">
                            <Icon name="MoneyComment" size="xs" color="light" />
                            <BodyText size="s" color="light" className="name">
                                Amy Askins & Chris Shairbaum
                            </BodyText>
                        </ListItem>
                        <ListItem className="sponsor">
                            <Icon name="MoneyComment" size="xs" color="light" />
                            <BodyText size="s" color="light" className="name">
                                Mike and Trudy Scheiding
                            </BodyText>
                        </ListItem>
                    </List>
                </div>
                <div className="sponsor-level donor">
                    <BodyText className="intro" size="m" color="medium">
                        A special thank you Dr. Jon Konicki and Dr. Bethany
                        Schumacher from Konicki Schumacher Chiropractic for your
                        donation.
                    </BodyText>
                </div>
                <div className="sponsor-level donor">
                    <BodyText className="intro" size="m" color="medium">
                        Thank you to Sinclair Community College for providing
                        the student desks.
                    </BodyText>
                </div>
                <div className="sponsor-level donor">
                    <BodyText className="intro" size="m" color="medium">
                        Thank you to our friends at D2D for letting us barrow
                        several set pieces.
                    </BodyText>
                </div>
            </Container>
            <Container maxWidth="xs" className="support-us">
                <Card
                    bgColor="paper"
                    borderColor="accent"
                    variant="outlined"
                    spacing={{ desktop: 'l', mobile: 'm' }}
                >
                    <CardHeader>
                        <BodyText color="light" weight="bold" size="m">
                            Support the future of theatre in Dayton
                        </BodyText>
                    </CardHeader>
                    <Divider color="paperLight" />
                    <CardContent>
                        <BodyText color="light" size="m">
                            We're SO glad you're here, but real talk... ticket
                            sales alone aren't enough. The only way we can
                            continue creating innovative theatre is with the
                            support of our community and awesome people like
                            you.
                        </BodyText>
                        <List
                            heading={
                                <BodyText color="light" size="m" weight="bold">
                                    Here are a few things you can do to help
                                    keep us around:
                                </BodyText>
                            }
                            itemSpacing="xs"
                            className="support-us-list"
                        >
                            <ListItem>
                                <Icon
                                    name="Checkmark"
                                    size="xs"
                                    color="accent"
                                />
                                <BodyText size="s" color="medium">
                                    Snap a photo while you're here and tag{' '}
                                    <strong>@nervetheatre</strong> on Instagram
                                </BodyText>
                            </ListItem>
                            <ListItem>
                                <Icon
                                    name="Checkmark"
                                    size="xs"
                                    color="accent"
                                />
                                <BodyText size="s" color="medium">
                                    Tell your friends about the show
                                </BodyText>
                            </ListItem>
                            <ListItem>
                                <Icon
                                    name="Checkmark"
                                    size="xs"
                                    color="accent"
                                />
                                <BodyText size="s" color="medium">
                                    Visit our "support us" page to donate or
                                    explore more ways to give
                                </BodyText>
                            </ListItem>
                            <ListItem>
                                <Icon
                                    name="Checkmark"
                                    size="xs"
                                    color="accent"
                                />
                                <BodyText size="s" color="medium">
                                    Ask about becoming a season sponsor by
                                    emailing us at{' '}
                                    <strong>
                                        sponsorship@nervetheatre.org
                                    </strong>
                                </BodyText>
                            </ListItem>
                        </List>
                    </CardContent>
                    <CardActions>
                        <SocialShareModal
                            title="Tell a friend about the show"
                            socialShareText={`Check out "${currentShow?.title}". I just saw the show and it was awesome! The Nerve rocks.`}
                            shareButtonText="Tell a Friend"
                            shareURL={fullShowURL}
                            buttonSize="xs"
                            buttonIconSize="xxs"
                        />
                        <FillButton
                            to={links.supportUsPage}
                            size="xs"
                            color="primary"
                        >
                            Support Us Page
                        </FillButton>
                    </CardActions>
                </Card>
            </Container>
        </StyledSponsors>
    );
};
