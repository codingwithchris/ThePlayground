import React, { useRef } from 'react';

import { Divider } from '@web/ui/core';
import { ShowPageProps } from './types';

import {
    getTotalPerformanceCount,
    getTotalTicketedPerformanceCount,
    getTotalPWYWPerformanceCount,
    hasRemainingPerformances,
} from '../../__lib__';

import {
    Hero,
    HealthNotice,
    ActionBar,
    Performances,
    PerformanceStats,
    TheStory,
    TheTrailer,
    Information,
} from './components';

export const SingleShowView = ({
    show,
    slug,
    seasonSlug,
    url,
}: SingleShowViewProps) => {
    const performanceCount = {
        total: getTotalPerformanceCount(show.performances),
        ticketed: getTotalTicketedPerformanceCount(show.performances),
        pwyw: getTotalPWYWPerformanceCount(show.performances),
        hasRemaining: hasRemainingPerformances(show.performances),
    };

    const ticketSectionRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Hero
                title={show.title}
                author={show.author?.name}
                bgImage={{ image: show?.heroImage?.asset }}
                actionBar={
                    <ActionBar
                        ticketSectionRef={ticketSectionRef}
                        hasRemainingPerformances={performanceCount.hasRemaining}
                    />
                }
            />
            <TheStory rawContent={show._rawDescription} />
            <Divider color="paper" />
            <Information
                url={url}
                runtime={{
                    hours: show.runtimeHours,
                    minutes: show.runtimeMinutes,
                }}
                intermissionCount={show.intermissionCount}
                location={show.location}
                series={show.series}
                rating={show.rating}
                triggerWarning={show.triggerWarning}
                contentAdvisory={show.contentAdvisory}
                effectsAdvisory={show.effectsAdvisory}
            />
            <PerformanceStats performanceCount={performanceCount} />
            <div ref={ticketSectionRef}>
                <Performances
                    healthNotice={
                        show.healthNotice?.shouldDisplay && (
                            <HealthNotice
                                title={show.healthNotice.title}
                                rawContent={show.healthNotice?._rawContent}
                            />
                        )
                    }
                    performances={show.performances}
                    ticketProvider={show.ticketProvider}
                    ticketLink={show.generalTicketLink}
                />
            </div>
            {show.promo?.trailer?.videoID && (
                <TheTrailer
                    videoID={show.promo?.trailer?.videoID}
                    credit={show.promo?.trailer?.credit}
                    creditRole={show.promo.trailer.creditRole}
                />
            )}
        </>
    );
};

interface SingleShowViewProps {
    show: ShowPageProps;
    slug: string;
    seasonSlug: string;
    url: string;
}
