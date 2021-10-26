import React from 'react';

import { FillButton, BodyText, Container, Icon } from '@web/ui/core';
import { DateRange } from '@web/ui/molecules';

import { useSingleShowContext } from '../../../../__context__';
import * as styled from './ActionBar.styles';

const scrollToRef = (ref: React.RefObject<HTMLDivElement>) =>
    window.scroll({ top: ref?.current?.offsetTop, behavior: 'smooth' });

export const ActionBar: React.FC<IActionBar> = ({
    ticketLink,
    hasRemainingPerformances,
}) => {
    const { currentShow } = useSingleShowContext();

    return (
        <styled.ActionBar>
            <Container className="container">
                <div className="tickets">
                    {ticketLink && hasRemainingPerformances && (
                        <FillButton
                            to={ticketLink}
                            size="s"
                            color="primary"
                            startIcon={
                                <Icon name="Ticket" size="xxs" color="light" />
                            }
                        >
                            Tickets
                        </FillButton>
                    )}
                </div>
                <div className="dates">
                    <BodyText color="light" size="s" weight="bold">
                        <DateRange
                            icon={<Icon name="Calendar" size="xs" />}
                            startDate={currentShow?.openDate || 'tbd'}
                            endDate={currentShow?.closeDate || 'tbd'}
                        />
                    </BodyText>
                </div>
            </Container>
        </styled.ActionBar>
    );
};

export interface IActionBar {
    ticketLink?: string;
    hasRemainingPerformances: boolean;
}
