import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import {
    Section,
    Container,
    BodyText,
    List,
    ListItem,
    Icon,
} from '@web/ui/core';

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
                        Thank you Dr. Jon Konicki and Dr. Bethany Schumacher
                        from Konicki Schumacher Chiropractic for your donation.
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
        </StyledSponsors>
    );
};
