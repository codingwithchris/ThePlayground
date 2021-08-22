import React from 'react';

import { Series as SeriesType } from '@web/domains/performance/series';
import { Location } from '@web/domains/performance/location';
import { Heading, BodyText, Container, Divider } from '@web/ui/core';

import {
    getTotalPerformanceCount,
    getTotalTicketedPerformanceCount,
    getTotalPWYWPerformanceCount,
} from '../../../__lib__';
import { ShowPerformance } from '../../../types';
import { useSingleShowContext } from '../../../__context__';

import { SeriesInfo } from './SeriesInfo/SeriesInfo';
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
                    <div className="info-grid">
                        <SeriesInfo {...series} className="info-series" />
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
