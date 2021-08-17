import React from 'react';
import {
    Icon,
    BodyText,
    Card,
    CardContent,
    List,
    ListItem,
} from '@web/ui/core';
import { DateRange } from '@web/ui/molecules';
import { formatDateString } from '@web/shared/utils';

import * as styled from './TicketInfoCard.styles';

export const TicketInfoCard = ({
    performanceCount,
    openDate,
    closeDate,
    className,
}: TicketInfoCardProps) => {
    const items = [
        {
            prefix: 'Total Performances:',
            count: performanceCount.total,
        },
        {
            prefix: 'Ticketed Performances:',
            count: performanceCount.ticketed,
        },
        {
            prefix: 'PWYW Performances:',
            count: performanceCount.pwyw,
        },
    ];

    return (
        <styled.TicketInfoCard
            className={className}
            bgColor="paperDark"
            borderColor="neutralDark"
            variant="outlined"
            spacing={{ desktop: 'xl', mobile: 'l' }}
        >
            <CardContent>
                <BodyText
                    size="m"
                    color="light"
                    weight="bold"
                    className="outer-title"
                >
                    Breakdown + Tickets
                </BodyText>
                <BodyText size="xs" color="medium" className="outer-subtitle">
                    PWYW = Pay What You Want
                </BodyText>
                <Card bgColor="default" variant="outlined" borderColor="paper">
                    <CardContent>
                        <List itemSpacing="xxs">
                            {items.map(({ prefix, count }, index) => (
                                <ListItem key={`info-${index}`}>
                                    <BodyText
                                        size="s"
                                        color="light"
                                        className="info-item-prefix"
                                    >
                                        {prefix}
                                    </BodyText>
                                    <BodyText size="s" color="light">
                                        {count}
                                    </BodyText>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
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
