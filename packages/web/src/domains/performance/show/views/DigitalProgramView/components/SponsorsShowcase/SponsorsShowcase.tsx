import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Section, Container, BodyText } from '@web/ui/core';

import { useConfigContext } from '@web/shared/context';
import {
    useSingleShowContext,
    ShowSponsorCard,
} from '@web/domains/performance/show';
import { ShowSponsors } from '../../../../types';

const StyledSponsors = styled(Section)`
    padding: ${spacing.layout.m} 0;

    .title {
        margin-bottom: ${spacing.component.s};
    }

    .sponsors-official-list {
        margin-top: ${spacing.component.xl};
        list-style: none;
        li:not(:last-child) {
            margin-bottom: ${spacing.component.s};
        }
    }
`;

export const SponsorsShowcase = ({ sponsors }: SponsorsProps) => {
    const { links, company } = useConfigContext();
    const { currentShow } = useSingleShowContext();

    const fullShowURL = `${company.website}${currentShow?.path}`;

    return (
        <StyledSponsors>
            <Container className="sponsors" maxWidth="m">
                <BodyText
                    size="s"
                    color="medium"
                    weight="bold"
                    className="title"
                >
                    sponsors + support
                </BodyText>
                <BodyText size="s" color="medium" className="lead-in">
                    This show wouldn't be possible without the generous support
                    of our community.
                </BodyText>
                {sponsors.official && sponsors.official.length > 0 && (
                    <ul className="sponsors-official-list">
                        {sponsors.official.map((sponsor) => (
                            <li key={sponsor.sponsor.name}>
                                <ShowSponsorCard {...sponsor} />
                            </li>
                        ))}
                    </ul>
                )}
                {sponsors.highlight && sponsors.highlight.length > 0 && (
                    <div className="sponsor-highlights">b</div>
                )}
                {sponsors._rawSpecialThanks &&
                    sponsors._rawSpecialThanks.length > 0 && (
                        <div className="sponsor-special-thanks">c</div>
                    )}
            </Container>
        </StyledSponsors>
    );
};

type SponsorsProps = {
    sponsors: ShowSponsors;
};
