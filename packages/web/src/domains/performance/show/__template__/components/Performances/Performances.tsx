import React from 'react';

import { ShowPerformance } from '@web/domains/performance/show';
import { Heading, BodyText, Container } from '@web/ui/core';
import { TicketProvider } from '@web/domains/performance/ticketProvider';
import { Link } from '@web/domains/app/routing';

import {
    getRemainingPerformanceCount,
    sortPastPerformancesToEnd,
} from '../../../__lib__';

import * as styled from './Performances.styles';
import { TicketTile } from './TicketTile/TicketTile';

export const Performances: React.FC<PerformancesProps> = ({
    performances,
    ticketProvider,
    ticketLink,
}) => {
    const remainingPerformances = getRemainingPerformanceCount(performances);

    const chancesText = remainingPerformances === 1 ? 'chance' : 'chances';

    const performancesTitleText = remainingPerformances
        ? 'Choose from available showtimes'
        : 'No available showtimes';

    const performanceSubtitleText = remainingPerformances ? (
        <>
            <span aria-hidden="true">[ </span>You have{' '}
            <strong>{remainingPerformances}</strong> more {chancesText} to catch
            the show<span aria-hidden="true"> ]</span>
        </>
    ) : (
        `This one is in the books. You missed your chance to see it :/`
    );

    // TODO: Could be optimized to only run if there are performances remaining
    const sortedPerformances = sortPastPerformancesToEnd([...performances]);

    return (
        <styled.Performances
            performancesCount={performances.length}
            bgColor="paperDark"
        >
            <Container>
                <div className="lead-in">
                    <Heading
                        size="xs"
                        color="light"
                        className="heading"
                        as="h2"
                    >
                        {performancesTitleText}
                    </Heading>
                    <BodyText size="s" color="medium" className="remaining">
                        {performanceSubtitleText}
                    </BodyText>
                </div>
                <ul className="performances-list">
                    {sortedPerformances.map((performance) => {
                        return (
                            <TicketTile
                                {...performance}
                                key={performance.datetime}
                            />
                        );
                    })}
                </ul>
                {ticketProvider?.name && ticketLink && (
                    <div className="ticket-provider">
                        <BodyText color="medium" size="xs">
                            <em>
                                * Tickets provided by {ticketProvider.name}. You
                                can purchase tickets for an individual
                                performance above, but if for any reason you run
                                into an issue, you can use the general ticket
                                link (<Link to={ticketLink}>{ticketLink}</Link>)
                                or call the box office at{' '}
                                {/* TODO: fix phone urls in links */}
                                <Link to={`tel=${ticketProvider.phone}`}>
                                    {ticketProvider.phone}
                                </Link>
                                .
                            </em>
                        </BodyText>
                    </div>
                )}
            </Container>
        </styled.Performances>
    );
};

export interface PerformancesProps {
    performances: ShowPerformance[];
    ticketProvider?: TicketProvider;
    ticketLink?: string;
}
