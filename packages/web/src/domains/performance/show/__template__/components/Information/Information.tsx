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
import { TicketInfoCard } from './TicketInfoCard/TicketInfoCard';

import * as styled from './Information.styles';

export const Information: React.FC<InformationProps> = ({
    location,
    series,
    rating,
    intermissionCount,
    runtime,
    performanceCount,
}) => {
    const { openDate, closeDate } = useSingleShowContext().currentShow || {};

    return (
        <styled.Information bgColor="paperDark">
            <Container>
                <Heading size="xs" color="light" className="section-title">
                    Info About This Show
                </Heading>
                <div className="info-wrapper">
                    <div className="info-grid">
                        <SeriesInfo {...series} />
                    </div>
                    <div className="info-tickets">
                        <TicketInfoCard
                            performanceCount={performanceCount}
                            openDate={openDate || ''}
                            closeDate={closeDate || ''}
                        />
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
    performanceCount: {
        total: number;
        ticketed: number;
        pwyw: number;
    };
}
