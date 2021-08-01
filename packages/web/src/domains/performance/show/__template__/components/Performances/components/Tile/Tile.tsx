import React from 'react';
import { parseISO, format } from 'date-fns';
import cx from 'classnames';

import { BodyText, Icon, FillButton, Card, CardContent } from '@web/ui/core';
import { isAvailablePerformance } from '../../../../../__lib__';

import * as styled from './Tile.styles';
import { TileProps } from './Tile.types';

export const Tile = ({
    datetime,
    status,
    isPayWhatYouCan,
    isPreview,
}: TileProps) => {
    const isAvailable = isAvailablePerformance(datetime, status);
    const rawDate = parseISO(datetime);
    const date = format(rawDate, 'iii, MMM dd');
    const curtain = format(rawDate, 'h:mm a');

    return (
        <styled.Tile>
            <Card variant="outlined" bgColor="default" borderColor="paperLight">
                <CardContent verticalSpacing="m">
                    <BodyText weight="bold" size="s" color="light">
                        {date}
                    </BodyText>
                    <BodyText color="light" size="s">
                        {curtain}
                    </BodyText>
                </CardContent>
            </Card>
        </styled.Tile>
    );
};
