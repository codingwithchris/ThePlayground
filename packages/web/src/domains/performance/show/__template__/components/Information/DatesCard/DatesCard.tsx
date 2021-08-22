import React from 'react';
import { parseISO, format, isValid } from 'date-fns';
import { BodyText, Icon } from '@web/ui/core';
import { formatDateString } from '@web/shared/utils';

import * as styled from './DatesCard.styles';

export const DatesCard = ({ dates, className }: DatesCardProps) => {
    const openDate = formatDateString(dates.open, 'MMMM dd, yyyy');
    const closeDate = formatDateString(dates.close, 'MMMM dd, yyyy');

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
                        <Icon name="Calendar" size="s" />
                        {openDate}
                    </BodyText>
                    <BodyText color="medium" size="xs" as="span">
                        through
                    </BodyText>
                    <BodyText
                        size="m"
                        color="light"
                        weight="bold"
                        className="date"
                    >
                        <Icon name="Calendar" size="s" />
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
