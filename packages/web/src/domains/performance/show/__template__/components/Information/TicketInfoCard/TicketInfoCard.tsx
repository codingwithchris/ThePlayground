import React from 'react';
import {
    Icon,
    BodyText,
    Card,
    CardContent,
    List,
    ListItem,
} from '@web/ui/core';
import { formatDateString } from '@web/shared/utils';

import * as styled from './TicketInfoCard.styles';

export const TicketInfoCard = ({
    performanceCount,
    openDate,
    closeDate,
    className,
}: TicketInfoCardProps) => {
    const DATE_FORMAT = 'MMMM dd, yyyy';

    const items = [
        {
            text: (
                <>
                    <strong>Opening Date: </strong>
                    {formatDateString(openDate, DATE_FORMAT)}
                </>
            ),
        },
        {
            text: (
                <>
                    <strong>Closing Date: </strong>
                    {formatDateString(closeDate, DATE_FORMAT)}
                </>
            ),
        },
        {
            text: (
                <>
                    <strong>Total Performances Performances: </strong>
                    {performanceCount.total}
                </>
            ),
        },
        {
            text: (
                <>
                    <strong>Ticketed Performances: </strong>
                    {performanceCount.ticketed}
                </>
            ),
        },
        {
            text: (
                <>
                    <strong>PWYW Performances: </strong>
                    {performanceCount.pwyw}
                </>
            ),
        },
    ];

    return (
        <styled.TicketInfoCard
            className={className}
            bgColor="paperDark"
            borderColor="neutral"
            variant="outlined"
        >
            <CardContent>
                <List itemSpacing="xxs">
                    {items.map(({ text }, index) => (
                        <ListItem key={`info-${index}`}>
                            <BodyText size="s" color="medium">
                                {text}
                            </BodyText>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </styled.TicketInfoCard>
    );
};

interface TicketInfoCardProps {
    openDate: string;
    closeDate: string;
    performanceCount: {
        total: number;
        ticketed: number;
        pwyw: number;
    };
    className?: string;
}
