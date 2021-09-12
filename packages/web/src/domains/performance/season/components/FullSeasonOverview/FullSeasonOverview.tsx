import React from 'react';
import { Container, Heading, BodyText, GrittyHeading } from '@web/ui/core';
import { ShowSnapshotCard } from '@web/domains/performance/show';
import { SeasonWithShows } from '@web/domains/performance/shared';

import { hasShowsInSeason } from '../../__lib__';

import * as styled from './FullSeasonOverview.styles';

export const FullSeasonOverview = ({ season }: FullSeasonOverviewProps) => {
    const formattedSeasonTitle = season.title.replace('-', '/');

    return (
        <styled.FullSeasonOverview>
            {season.tagline && (
                <Heading size="xs" color="medium" className="tagline">
                    {season.tagline}
                </Heading>
            )}
            <GrittyHeading
                size="m"
                className="intro-heading"
                bgColor="neutralLight"
                color="dark"
                offset={-2}
            >
                Our {formattedSeasonTitle} Season
            </GrittyHeading>

            {season.description && (
                <BodyText size="m" color="light" className="intro-copy">
                    {season.description}
                </BodyText>
            )}

            {hasShowsInSeason(season.shows) && (
                <ul className="show-list">
                    {season.shows.map((show) => (
                        <li key={show.slug.current}>
                            <ShowSnapshotCard
                                title={show.title}
                                slug={show.slug}
                                author={show.author}
                                cardImage={show.cardImage}
                                series={show.series}
                                openDate={show.openDate}
                                closeDate={show.closeDate}
                                teaser={show.teaser}
                                performances={show.performances}
                                rating={show.rating}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </styled.FullSeasonOverview>
    );
};

export interface FullSeasonOverviewProps {
    season: SeasonWithShows;
}
