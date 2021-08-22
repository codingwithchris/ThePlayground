import React from 'react';

import { Series as SeriesType } from '@web/domains/performance/series';
import { Location } from '@web/domains/performance/location';
import { BodyText, Container } from '@web/ui/core';

import { useSingleShowContext } from '../../../__context__';

import { SeriesInfo } from './SeriesInfo/SeriesInfo';
import { LocationCard } from './LocationCard/LocationCard';
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
                    <SeriesInfo {...series} className="info-series" />
                    <div className="info-grid">
                        <LocationCard
                            location={location}
                            className="info-location"
                        />
                        <LocationCard
                            location={location}
                            className="info-location"
                        />
                        <LocationCard
                            location={location}
                            className="info-location"
                        />
                        <LocationCard
                            location={location}
                            className="info-location"
                        />
                        <LocationCard
                            location={location}
                            className="info-location"
                        />
                        <LocationCard
                            location={location}
                            className="info-location"
                        />
                    </div>
                    <div className="info-tickets" />
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
