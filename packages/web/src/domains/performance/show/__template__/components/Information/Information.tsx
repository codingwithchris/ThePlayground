import React from 'react';

import { Series as SeriesType } from '@web/domains/performance/series';
import { Location } from '@web/domains/performance/location';
import { BodyText, Container } from '@web/ui/core';

import { useSingleShowContext } from '../../../__context__';

import { SeriesInfoCard } from './SeriesInfoCard/SeriesInfoCard';
import { DatesCard } from './DatesCard/DatesCard';
import { LocationCard } from './LocationCard/LocationCard';
import { RuntimeCard } from './RuntimeCard/RuntimeCard';
import * as styled from './Information.styles';

export const Information: React.FC<InformationProps> = ({
    location,
    series,
    rating,
    intermissionCount,
    runtime,
}) => {
    const { openDate, closeDate } = useSingleShowContext().currentShow || {};

    return (
        <styled.Information bgColor="paperDark">
            <Container>
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
                    <div className="content-info">
                        <SeriesInfoCard {...series} className="info-series" />
                        <LocationCard location={location} />
                        <LocationCard location={location} />
                    </div>
                </div>
            </Container>
        </styled.Information>
    );
};

export interface InformationProps {
    series: SeriesType;
    location: Location;
    rating: string;
    intermissionCount: number;
    runtime: {
        hours: number;
        minutes: number;
    };
}
