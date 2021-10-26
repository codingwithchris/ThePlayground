import React, { memo } from 'react';

import { ShowPerformance } from '@web/domains/performance/show';
import { Heading, BodyText, Container, Icon, FillButton } from '@web/ui/core';
import { TicketProvider } from '@web/domains/performance/ticketProvider';
import { Link } from '@web/domains/app/routing';

import {
    getRemainingPerformanceCount,
    sortPastPerformancesToEnd,
    isPastPerformance,
} from '../../../../__lib__';

import * as styled from './Performances.styles';
import { TicketTile } from './TicketTile/TicketTile';

export const Performances: React.FC<PerformancesProps> = ({
    performances,
    ticketProvider,
    ticketLink,
    healthNotice,
}) => {
    const remainingPerformancesCount =
        getRemainingPerformanceCount(performances);

    const chancesText = remainingPerformancesCount === 1 ? 'chance' : 'chances';

    const performancesTitleText = remainingPerformancesCount
        ? 'Tickets are still available'
        : 'Tickets unavailable';

    const performanceSubtitleText = remainingPerformancesCount ? (
        <>
            <span aria-hidden="true">[ </span>You have{' '}
            <strong>{remainingPerformancesCount}</strong> more {chancesText} to
            catch the show<span aria-hidden="true"> ]</span>
        </>
    ) : (
        `This one is in the books. You missed your chance to see it :/`
    );

    // TODO: Could be optimized to only run if there are performances remaining
    // ! This is causing a weird UI Bug :/ Disabling for now...
    // ! This is due to statically generated code mismatching current time which is causing invariance and a ui glitch that is malforming HTML.
    // const sortedPerformances = sortPastPerformancesToEnd([...performances]);

    return (
        <styled.Performances
            performancesCount={performances.length}
            bgColor="paperDark"
        >
            <Container maxWidth="m">
                {healthNotice && (
                    <div className="health-notice">{healthNotice}</div>
                )}
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

                {remainingPerformancesCount &&
                    ticketProvider?.name &&
                    ticketLink && (
                        <div className="get-tickets-callout">
                            <Icon
                                name="Ticket"
                                size="xl"
                                color="light"
                                className="icon"
                            />
                            <BodyText
                                color="light"
                                size="l"
                                weight="bold"
                                className="lead"
                            >
                                You seriously don't want to miss this...
                            </BodyText>
                            <FillButton
                                size="m"
                                color="primary"
                                to={ticketLink}
                                className="button"
                            >
                                Get Your Tickets Now
                            </FillButton>
                            <BodyText
                                size="s"
                                color="light"
                                className="ticket-provider"
                            >
                                Tickets are provided by{' '}
                                <strong>{ticketProvider.name}</strong>. If for
                                some reason you don't want to purchase tickets
                                through the website or the website is having
                                technical issues, you can call the box office at{' '}
                                <Link
                                    to={`tel:${ticketProvider.phone}`}
                                    className="provider-phone"
                                    noNewTab
                                >
                                    {ticketProvider.phone}
                                </Link>
                                .
                            </BodyText>
                        </div>
                    )}
                {/* TODO: FIX the code below and replace the static code up above */}
                {/* <ul className="performances-list">
                    {remainingPerformances.map((performance) => {
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
                                * Ticket service provided by{' '}
                                {ticketProvider.name}. You can purchase tickets
                                for an individual performance above, but if for
                                any reason you run into an issue, you can use
                                their general ticket link (
                                <Link
                                    to={ticketLink}
                                    className="general-ticket-link"
                                >
                                    {ticketLink}
                                </Link>
                                ) or call the box office at{' '}
                                <Link
                                    to={`tel:${ticketProvider.phone}`}
                                    className="provider-phone"
                                    noNewTab
                                >
                                    {ticketProvider.phone}
                                </Link>
                                .
                            </em>
                        </BodyText>
                    </div>
                )} */}
            </Container>
        </styled.Performances>
    );
};

export interface PerformancesProps {
    healthNotice?: JSX.Element | false;
    performances: ShowPerformance[];
    ticketProvider?: TicketProvider;
    ticketLink?: string;
}
