import React from 'react';

import { FillButton, BodyText, Container, Icon } from '@web/ui/core';
import { SocialShareModal, DateRange } from '@web/ui/molecules';

import { useSingleShowContext } from '../../../__context__';

import * as styled from './ActionBar.styles';

const scrollToRef = (ref: React.RefObject<HTMLDivElement>) =>
    window.scroll({ top: ref?.current?.offsetTop, behavior: 'smooth' });

export const ActionBar: React.FC<IActionBar> = ({ ticketSectionRef }) => {
    const { currentShow } = useSingleShowContext();

    return (
        <styled.ActionBar>
            <Container className="container">
                <div className="tickets">
                    <FillButton
                        onClick={() => scrollToRef(ticketSectionRef)}
                        size="s"
                        color="primary"
                    >
                        Showtimes + Tix
                    </FillButton>
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
    ticketSectionRef: React.RefObject<HTMLDivElement>;
}
