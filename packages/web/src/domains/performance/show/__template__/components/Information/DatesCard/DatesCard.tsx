import React from 'react';
import { parseISO, format, isValid } from 'date-fns';
import { BodyText, Icon } from '@web/ui/core';
import { formatDateString } from '@web/shared/utils';

import * as styled from './DatesCard.styles';

export const DatesCard = ({ dates, className }: DatesCardProps) => {
    const openDate = formatDateString(dates.open, 'MMM.dd.yy');
    const closeDate = formatDateString(dates.close, 'MMM.dd.yy');

    return (
        <styled.DatesCard label="dates" className={className}>
            <div className="content">
                <Icon name="Calendar" size="m" color="light" />
                <div className="dates">
                    <BodyText size="m" color="light" weight="bold">
                        Opens: {openDate}
                    </BodyText>
                    <BodyText size="m" color="light" weight="bold">
                        Closes: {closeDate}
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
