import React from 'react';
import { BodyText } from '@web/ui/core';
import { formatDateString } from '@web/shared/utils';

import * as styled from './DatesCard.styles';

export const DatesCard = ({ dates, className }: DatesCardProps) => {
    const openDate = formatDateString(dates.open, 'MM.dd.yyyy');
    const closeDate = formatDateString(dates.close, 'MM.dd.yyyy');

    return (
        <styled.DatesCard label="dates" className={className}>
            <div className="content">
                <div className="dates">
                    <BodyText
                        size="m"
                        color="light"
                        weight="bold"
                        className="date"
                    >
                        {openDate}
                    </BodyText>
                    <BodyText
                        color="medium"
                        size="xs"
                        as="span"
                        className="through"
                    >
                        through
                    </BodyText>
                    <BodyText
                        size="m"
                        color="light"
                        weight="bold"
                        className="date"
                    >
                        {closeDate}
                    </BodyText>
                </div>
            </div>
        </styled.DatesCard>
    );
};

interface DatesCardProps {
    className?: string;
    dates: {
        open?: string;
        close?: string;
    };
}
