import React from 'react';
import styled from 'styled-components';
import { spacing, borders } from '@web/ui/tokens';
import { rgba } from 'polished';
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
    FillButton,
} from '@web/ui/core';
import { SocialShareModal } from '@web/ui/molecules';
import { useConfigContext } from '@web/shared/context';
import { useSingleShowContext } from '@web/domains/performance/show';

const StyledSupportUsCTA = styled(Section)`
    .support-us {
        margin-top: ${spacing.layout.m};
        margin-bottom: ${spacing.layout.m};
    }

    .support-us-list {
        margin-top: ${spacing.component.m};
    }

    .support-us-card {
        border: 2px dashed ${({ theme }) => theme.surfaces.accentDark};
        box-shadow: ${rgba('#F25C05', 0.25)} 0px 4px 24px;
    }
`;

export const SupportUsCTA = () => {
    const { links, company } = useConfigContext();
    const { currentShow } = useSingleShowContext();

    const fullShowURL = `${company.website}${currentShow?.path}`;

    return (
        <StyledSupportUsCTA>
            <Container maxWidth="xs" className="support-us">
                <Card
                    className="support-us-card"
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
                                    <strong>{company.instagramUsername}</strong>{' '}
                                    on Instagram
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
                                    <strong>{company.emailSponsorship}</strong>
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
        </StyledSupportUsCTA>
    );
};
