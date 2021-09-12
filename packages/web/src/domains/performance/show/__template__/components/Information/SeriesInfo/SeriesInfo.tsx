import React from 'react';
import { Icon, BodyText } from '@web/ui/core';
import { getSeriesIconName, Series } from '@web/domains/performance/series';

import * as styled from './SeriesInfo.styles';

export const SeriesInfo = ({
    title,
    identifier,
    description,
    className,
}: SeriesInfoProps) => {
    return (
        <styled.SeriesInfo className={className}>
            <Icon
                name={getSeriesIconName(identifier)}
                size="l"
                color="accent"
            />

            <BodyText
                size="m"
                color="light"
                as="p"
                weight="bold"
                className="series-title"
            >
                Part of our {title} series
            </BodyText>
            <BodyText size="s" color="medium" as="p">
                {description}
            </BodyText>
        </styled.SeriesInfo>
    );
};

interface SeriesInfoProps extends Series {
    className?: string;
}
