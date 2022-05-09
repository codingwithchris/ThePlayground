import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, grid, borders } from '@web/ui/tokens';
import { rgba } from 'polished';

import {
    Image,
    Card,
    CardContent,
    BodyText,
    Icon,
    TextButton,
    PortableText,
    FillButton,
} from '@web/ui/core';

import { Sponsor } from '@web/domains/performance/sponsor';
import { ShowSponsorHighlight } from '../../../../../types';

const componentBreakpoint = breakpoints.s;

const StyledSponsorHighlight = styled(Card)`
    flex-direction: column-reverse;
    ${componentBreakpoint} {
        flex-direction: row;
    }

    .sponsor-highlight-content__name {
        margin-bottom: ${spacing.component.s};
    }

    .sponsor-highlight-image {
        background: ${(props) => props.theme.palette.system.white};
        border-top-left-radius: ${borders.modalRadius};
        border-top-right-radius: ${borders.modalRadius};
        padding: ${spacing.component.s};
        flex: 200px 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            border-top-left-radius: ${borders.modalRadius};
            border-top-right-radius: ${borders.modalRadius};
            object-fit: contain !important;
            height: 150px;
            width: 100%;
        }

        ${componentBreakpoint} {
            border-top-left-radius: 0;
            border-top-right-radius: ${borders.modalRadius};
            border-bottom-right-radius: ${borders.modalRadius};
            flex: 250px 0 0;
            padding: ${spacing.component.l};

            img {
                height: auto;
                width: 100%;
                border-top-left-radius: 0;
                border-top-right-radius: ${borders.modalRadius};
                border-bottom-right-radius: ${borders.modalRadius};
            }
        }
    }

    .sponsor-highlight-content__action {
        margin-top: ${spacing.component.l};
    }
`;

const SponsorImage = ({ image }: { image: Sponsor['image'] }) => {
    const { asset, alt } = image || {};
    return asset ? (
        <Image image={asset} alt={alt || ''} />
    ) : (
        <Icon name="Rocket" size="xl" color="accent" />
    );
};

export const SponsorHighlightCard = ({
    sponsor,
    specialLink,
    specialLinkText,
    _rawContent,
}: ShowSponsorHighlight) => {
    return (
        <StyledSponsorHighlight
            layout="inline"
            variant="outlined"
            borderColor="paperAccent"
            bgColor="paperDark"
            spacing={{ desktop: 'l', mobile: 'l' }}
        >
            <CardContent className="sponsor-highlight-content">
                <BodyText
                    className="sponsor-highlight-content__name"
                    size="m"
                    weight="bold"
                    color="light"
                >
                    {sponsor.name}
                </BodyText>
                <div className="sponsor-highlight-content__copy">
                    <PortableText
                        content={_rawContent}
                        config={{
                            block: { bodyText: { size: 's', color: 'medium' } },
                        }}
                    />
                </div>
                {(specialLink || sponsor.link) && (
                    <div className="sponsor-highlight-content__action">
                        <FillButton
                            size="s"
                            color="primary"
                            to={specialLink || sponsor.link}
                            animateIconOnHover
                            endIcon={<Icon name="ArrowRight" size="xxs" />}
                        >
                            {specialLinkText || 'Learn More'}
                        </FillButton>
                    </div>
                )}
            </CardContent>
            <div className="sponsor-highlight-image">
                <SponsorImage image={sponsor.image} />
            </div>
        </StyledSponsorHighlight>
    );
};
