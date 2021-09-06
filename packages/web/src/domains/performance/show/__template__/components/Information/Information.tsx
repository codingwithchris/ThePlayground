import React from 'react';

import { Series as SeriesType } from '@web/domains/performance/series';
import { Location } from '@web/domains/performance/location';
import { BodyText, Card, CardContent, Container } from '@web/ui/core';
import { SocialShareModal } from '@web/ui/molecules';

import { useSingleShowContext } from '../../../__context__';
import { SHOW_RATING } from '../../../constants';
import { ShowDetail } from '../../../types';

import { ContentAdvisoryCard } from './ContentAdvisoryCard/ContentAdvisoryCard';
import { TriggerWarningCard } from './TriggerWarningCard/TriggerWarningCard';
import { EffectsAdvisoryCard } from './EffectsAdvisoryCard/EffectsAdvisoryCard';
import { SeriesInfo } from './SeriesInfo/SeriesInfo';
import { DatesCard } from './DatesCard/DatesCard';
import { LocationCard } from './LocationCard/LocationCard';
import { RuntimeCard } from './RuntimeCard/RuntimeCard';
import * as styled from './Information.styles';

export const Information: React.FC<InformationProps> = ({
    url,
    location,
    series,
    intermissionCount,
    runtime,
    rating,
    contentAdvisory,
    triggerWarning,
    effectsAdvisory,
}) => {
    const { openDate, closeDate, title } =
        useSingleShowContext().currentShow || {};

    return (
        <styled.Information bgColor="paperDark">
            <Container maxWidth="m">
                <BodyText
                    size="s"
                    color="light"
                    weight="bold"
                    className="section-title"
                    as="h2"
                >
                    GENERAL PERFORMANCE INFO
                </BodyText>
                <div className="info-wrapper">
                    <div className="performance-info">
                        <DatesCard
                            dates={{ open: openDate, close: closeDate }}
                        />
                        <LocationCard location={location} />
                        <RuntimeCard
                            runtime={runtime}
                            intermissionCount={intermissionCount}
                        />
                    </div>
                    <Card
                        className="content-info"
                        variant="outlined"
                        borderColor="neutralDark"
                    >
                        <CardContent verticalSpacing="l" className="info-items">
                            <SeriesInfo {...series} className="info-series" />
                            {contentAdvisory?.copy && (
                                <ContentAdvisoryCard
                                    rating={rating}
                                    {...contentAdvisory}
                                />
                            )}
                            {triggerWarning && (
                                <TriggerWarningCard
                                    triggerWarning={triggerWarning}
                                />
                            )}
                            {effectsAdvisory?.copy && (
                                <EffectsAdvisoryCard {...effectsAdvisory} />
                            )}
                            <SocialShareModal
                                shareURL={url}
                                socialShareText={`Check out "${
                                    title || 'this show'
                                }" at The Nerve!`}
                            />
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </styled.Information>
    );
};

export interface InformationProps {
    url: string;
    series: SeriesType;
    location: Location;
    intermissionCount: number;
    runtime: {
        hours: number;
        minutes: number;
    };
    rating: SHOW_RATING;
    triggerWarning?: string;
    contentAdvisory?: ShowDetail;
    effectsAdvisory?: ShowDetail;
}
