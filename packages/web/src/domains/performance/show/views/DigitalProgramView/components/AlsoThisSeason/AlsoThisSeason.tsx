import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints } from '@web/ui/tokens';
import { useGlobalPerformanceContext } from '@web/shared/context';
import { useSingleSeasonContext } from '@web/domains/performance/season';
import {
    useSingleShowContext,
    ShowSnapshotCard,
    sortShowsByDate,
} from '@web/domains/performance/show';
import { Section, Container, BodyText } from '@web/ui/core';

const StyledAlsoThisSeason = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .section-title {
        margin-bottom: ${spacing.layout.s};
    }

    .show-list > li:not(:last-child) {
        margin-bottom: ${spacing.component.xl};
    }
`;

export const AlsoThisSeason = () => {
    const { currentShow } = useSingleShowContext();
    const { currentSeason } = useSingleSeasonContext();
    const { get } = useGlobalPerformanceContext();
    const shows = get.otherShowsInSeason(
        currentSeason?.slug?.current,
        currentShow?.slug?.current
    );

    const sortedShows = shows && sortShowsByDate(shows, 'ASC');

    return (
        <StyledAlsoThisSeason bgColor="paperDark">
            <Container maxWidth="xs">
                <BodyText
                    color="medium"
                    weight="bold"
                    size="s"
                    className="section-title"
                >
                    Other shows this season
                </BodyText>
                <ul className="show-list">
                    {sortedShows?.map((show) => (
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
            </Container>
        </StyledAlsoThisSeason>
    );
};
