import React from 'react';

import { Series as SeriesType } from '@web/domains/performance/series';
import { Location } from '@web/domains/performance/location';
import { Heading, BodyText, Container, Divider } from '@web/ui/core';

import { SeriesInfo } from './SeriesInfo/SeriesInfo';

import * as styled from './Information.styles';

export const Information: React.FC<InformationProps> = ({
    location,
    series,
}) => {
    return (
        <styled.Information bgColor="paperDark">
            <Container>
                <SeriesInfo {...series} />
                <div className="info-grid" />
            </Container>
        </styled.Information>
    );
};

export interface InformationProps {
    series: SeriesType;
    location: Location;
}
