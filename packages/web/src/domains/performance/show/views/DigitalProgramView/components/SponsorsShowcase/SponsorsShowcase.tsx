import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, grid } from '@web/ui/tokens';
import { Section, Container, BodyText, PortableText } from '@web/ui/core';

import { useConfigContext } from '@web/shared/context';
import {
    useSingleShowContext,
    ShowSponsorCard,
} from '@web/domains/performance/show';
import { SponsorHighlightCard } from './SponsorHighlightCard/SponsorHighlightCard';
import { ShowSponsors } from '../../../../types';

const StyledSponsors = styled(Section)`
    padding: ${spacing.layout.m} 0 ${spacing.layout.m} 0;
    ${breakpoints.s} {
        padding: ${spacing.layout.m} 0 ${spacing.layout.l} 0;
    }

    .title {
        margin-bottom: ${spacing.component.xs};
    }

    .sponsors-official__list {
        display: grid;
        gap: ${spacing.component.m};
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        list-style: none;
        margin-top: ${spacing.layout.xs};

        ${breakpoints.s} {
            grid-template-columns: 1fr 1fr;
        }
    }

    .sponsor-highlights,
    .sponsor-special-thanks {
        max-width: ${grid.xxs};
        ${breakpoints.s} {
            max-width: ${grid.s};
        }
    }

    .sponsor-highlights__title,
    .sponsor-special-thanks__title {
        margin-bottom: ${spacing.component.xs};
    }

    .sponsor-highlights {
        margin: ${spacing.layout.m} auto 0 auto;
    }

    .sponsor-highlights__list {
        list-style: none;
    }

    .sponsor-special-thanks {
        margin: ${spacing.layout.s} auto 0 auto;
    }

    .sponsor-special-thanks {
        list-style: none;
        a {
            text-decoration: underline;
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
                    <ul className="sponsors-official__list">
                        {sponsors.official.map((sponsor) => (
                            <li key={sponsor.sponsor.name}>
                                <ShowSponsorCard {...sponsor} />
                            </li>
                        ))}
                    </ul>
                )}

                {sponsors.highlight && sponsors.highlight.length > 0 && (
                    <div className="sponsor-highlights">
                        <BodyText
                            size="s"
                            color="medium"
                            weight="bold"
                            className="sponsor-highlights__title"
                        >
                            sponsor highlights
                        </BodyText>
                        <ul className="sponsor-highlights__list">
                            {sponsors.highlight.map((highlight) => (
                                <li key={highlight.sponsor.name}>
                                    <SponsorHighlightCard {...highlight} />;
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {sponsors._rawSpecialThanks &&
                    sponsors._rawSpecialThanks.length > 0 && (
                        <div className="sponsor-special-thanks">
                            <BodyText
                                size="s"
                                color="medium"
                                weight="bold"
                                className="sponsor-special-thanks__title"
                            >
                                special thanks
                            </BodyText>
                            <PortableText
                                content={sponsors._rawSpecialThanks}
                                config={{ block: { bodyText: { size: 's' } } }}
                            />
                        </div>
                    )}
            </Container>
        </StyledSponsors>
    );
};

type SponsorsProps = {
    sponsors: ShowSponsors;
};
