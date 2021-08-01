import React from 'react';

import { Heading, BodyText } from '@web/ui/core';

import {
    getTotalPerformanceCount,
    getRemainingPerformanceCount,
} from '../../../__lib__';

import * as styled from './Performances.styles';
import { PerformancesProps } from './Performances.types';

import { Tile } from './components/Tile/Tile';

export const Performances: React.FC<PerformancesProps> = ({ performances }) => {
    const totalPerformances = getTotalPerformanceCount(performances);
    const remainingPerformances = getRemainingPerformanceCount(performances);

    return (
        <styled.Performances>
            <Heading size="xs" color="light">
                Choose from available dates
            </Heading>
            <BodyText size="s" color="medium">
                [ {remainingPerformances} of {totalPerformances} performances
                remaining ]
            </BodyText>
            <div className="performances-list">
                {performances.map((performance) => {
                    return <Tile {...performance} />;
                })}
            </div>
        </styled.Performances>
    );
};
