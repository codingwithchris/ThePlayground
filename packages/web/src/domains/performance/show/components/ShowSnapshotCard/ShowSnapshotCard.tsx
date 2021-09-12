import React from 'react';

import {
    BodyText,
    BrandImage,
    Tag,
    CardMedia,
    CardContent,
    CardActions,
    CardHeader,
    CardActionArea,
    Divider,
    List,
    ListItem,
    Icon,
    FillButton,
    OutlineButton,
} from '@web/ui/core';

import { useGlobalPerformanceContext } from '@web/shared/context';

import { formatDateString } from '@web/shared/utils';

import { getSeriesIconName, SERIES_ID } from '@web/domains/performance/series';

import { Show } from '../../types';
import {
    getRemainingPerformanceCount,
    getTotalPWYWPerformanceCount,
} from '../../__lib__';

import { SHOW_STATUS } from '../../constants';

import * as styled from './ShowSnapshotCard.styles';

/**
 * Provides a "snapshot" of a show which includes a little more information than
 * you might get from a `ShowFeatureCard` or `ShowPoster` while including a slightly
 * less prominent image.
 */
export const ShowSnapshotCard = ({
    cardImage,
    title,
    openDate,
    closeDate,
    author,
    slug,
    series,
    teaser,
    performances,
    rating,
    className,
}: ShowSnapshotCardProps) => {
    const { get } = useGlobalPerformanceContext();
    const { path, status } = get.show(slug.current) || {};

    const isArchived = status === SHOW_STATUS.PAST;

    const formattedOpenDate = formatDateString(openDate, 'MMM dd');
    const formattedCloseDate = formatDateString(closeDate, 'dd, yyyy');
    const remainingPerformances = getRemainingPerformanceCount(performances);
    const totalPWYWPerformances = getTotalPWYWPerformanceCount(performances);

    return (
        <styled.ShowSnapshotCard
            data-archived={isArchived}
            layout="stacked"
            bgColor="default"
            variant="outlined"
            borderColor="paper"
            spacing={{ desktop: 'l', mobile: 'm' }}
            className={className}
        >
            {cardImage?.asset && (
                <CardMedia className="media-wrapper">
                    <CardActionArea to={path}>
                        <BrandImage
                            image={cardImage.asset}
                            alt={cardImage.alt ?? ''}
                            objectFit="cover"
                            objectPosition="center center"
                            className="image"
                        />
                    </CardActionArea>
                </CardMedia>
            )}
            <CardHeader>
                <Tag
                    text={`${formattedOpenDate}-${formattedCloseDate}`}
                    color="accent"
                    bgColor="paper"
                    borderColor="paperLight"
                    size="s"
                    media={<Icon name="Calendar" size="xs" />}
                    className="dates"
                />
                <BodyText
                    className="title"
                    size="l"
                    color="light"
                    as="h4"
                    weight="bold"
                >
                    {title}
                </BodyText>

                <BodyText size="m" color="medium">
                    [ by {author.name} ]
                </BodyText>
            </CardHeader>
            <Divider color="paper" />
            <CardContent>
                {teaser && (
                    <BodyText color="light" size="m" className="teaser">
                        {teaser}
                    </BodyText>
                )}
                <List itemSpacing="xxs">
                    {series?.identifier === SERIES_ID.ALTER_EGO && (
                        <ListItem>
                            <Icon
                                name={getSeriesIconName(series?.identifier)}
                                size="xs"
                                color="accent"
                            />
                            <BodyText color="accent" size="s">
                                Part of our {series?.title} series
                            </BodyText>
                        </ListItem>
                    )}
                    {rating && (
                        <ListItem>
                            <Icon
                                name="Info"
                                size="xs"
                                color="highlightExtra"
                            />
                            <BodyText color="medium" size="s">
                                Rated <strong>{rating.toUpperCase()}</strong>
                            </BodyText>
                        </ListItem>
                    )}
                    <ListItem>
                        <Icon name="Ticket" size="xs" color="highlightExtra" />
                        <BodyText color="medium" size="s">
                            Remaining Performances: {remainingPerformances}
                        </BodyText>
                    </ListItem>
                    {!isArchived && (
                        <ListItem>
                            <Icon
                                name="MoneyComment"
                                size="xs"
                                color="highlightExtra"
                            />
                            <BodyText color="medium" size="s">
                                Pay What You Want Performances:{' '}
                                {totalPWYWPerformances}
                            </BodyText>
                        </ListItem>
                    )}
                </List>
            </CardContent>
            <Divider color="paper" />
            <CardActions>
                {isArchived ? (
                    <OutlineButton size="s" color="tertiary" to={path}>
                        See What You Missed
                    </OutlineButton>
                ) : (
                    <FillButton
                        size="s"
                        color="primary"
                        to={path}
                        animateOnClick
                    >
                        More Info + Tickets
                    </FillButton>
                )}
            </CardActions>
        </styled.ShowSnapshotCard>
    );
};

type ShowSnapshotCardData = Pick<
    Show,
    | 'slug'
    | 'title'
    | 'cardImage'
    | 'openDate'
    | 'closeDate'
    | 'author'
    | 'rating'
    | 'series'
    | 'teaser'
    | 'performances'
>;

interface ShowSnapshotCardProps extends ShowSnapshotCardData {
    className?: string;
}
