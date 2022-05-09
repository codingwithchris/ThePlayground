import React from 'react';

import { Link } from '@web/domains/app/routing';

import {
    BrandImage,
    CardContent,
    BodyText,
    Icon,
    AvailableIconName,
    Tag,
} from '@web/ui/core';
import {
    SPONSORSHIP_LEVEL_DISPLAY,
    Sponsor,
} from '@web/domains/performance/sponsor';
import { ShowSponsorOfficial } from '../../types';
import * as styled from './ShowSponsorCard.styles';

const SponsorThumbnail = ({
    image,
    type,
}: {
    image: Sponsor['image'];
    type: Sponsor['type'];
}) => {
    const { asset, alt } = image || {};
    const iconName: AvailableIconName =
        type === 'person' ? 'Person' : 'Building';
    return asset ? (
        <BrandImage image={asset} alt={alt || ''} />
    ) : (
        <Icon name={iconName} size="m" color="highlight" />
    );
};

export const ShowSponsorCard = ({
    sponsor,
    scope,
    level,
}: ShowSponsorOfficial) => {
    const sponsorShipLevel = SPONSORSHIP_LEVEL_DISPLAY[level];
    return (
        <styled.ShowSponsorCard
            variant="outlined"
            borderColor="neutralDark"
            bgColor="paperDark"
            spacing={{ desktop: 's', mobile: 's' }}
        >
            <CardContent verticalSpacing="m" className="sponsor-card-wrapper">
                <div
                    className="sponsor-media"
                    data-icon={!sponsor.image?.asset}
                >
                    <SponsorThumbnail
                        image={sponsor.image}
                        type={sponsor.type}
                    />
                </div>
                <div className="sponsor-content">
                    <div className="sponsor-info">
                        <BodyText size="s" color="light" weight="bold">
                            {sponsor.name}
                        </BodyText>
                        <BodyText size="xs" color="medium">
                            {scope} sponsor
                        </BodyText>
                    </div>
                    <div className="sponsor-meta">
                        <Tag
                            size="xs"
                            text={`Level: ${sponsorShipLevel}`}
                            bgColor="paperDark"
                            color="medium"
                            borderColor="paperLight"
                        />
                    </div>
                </div>
                {sponsor.link && (
                    <Link to={sponsor.link} className="sponsor-link">
                        <BodyText
                            className="sponsor-link__text"
                            color="light"
                            size="xs"
                        >
                            sponsor site
                            <Icon name="ArrowRight" size="xxs" />
                        </BodyText>
                    </Link>
                )}
            </CardContent>
        </styled.ShowSponsorCard>
    );
};
