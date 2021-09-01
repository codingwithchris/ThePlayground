import React from 'react';

import { Link } from '@web/domains/app/routing';
import { SanityImageDataWithAlt } from '@web/shared/types';

import {
    BodyText,
    Heading,
    BrandImage,
    BackgroundOverlay,
    Tag,
} from '@web/ui/core';
import { formatDateString } from '@web/shared/utils';
import {
    useConfigContext,
    useGlobalPerformanceContext,
} from '@web/shared/context';

import { Series } from '@web/domains/performance/series';
import { useSingleShowContext } from '@web/domains/performance/show';

import { getShowStatus } from '../../__lib__';
import { SHOW_STATUS, SHOW_STATUS_MESSAGE } from '../../constants';
import { ShowAuthor } from '../../types';

import * as styled from './ShowFeatureCard.styles';

export const ShowFeatureCard = ({
    image,
    title,
    openDate,
    closeDate,
    author,
    series,
    showSlug,
}: ShowFeatureCardProps) => {
    const { get } = useGlobalPerformanceContext();
    const { path, status } = get.show(showSlug) || {};

    const statusMessage = status
        ? SHOW_STATUS_MESSAGE[status]
        : SHOW_STATUS_MESSAGE.unknown;

    const isArchived = status === SHOW_STATUS.PAST;

    const formattedOpenDate = formatDateString(openDate, 'MMM dd');
    const formattedCloseDate = formatDateString(closeDate, 'MMM dd, yyyy');

    return (
        <styled.ShowFeatureCard isArchived={isArchived}>
            <Link to={path} className="wrapper">
                {image?.asset && (
                    <BrandImage
                        image={image.asset}
                        alt={image.alt ?? ''}
                        objectFit="cover"
                        objectPosition="center center"
                        className="image"
                    />
                )}
                <BackgroundOverlay
                    variant="verticalGradientDark"
                    className="overlay"
                />
                <div className="content">
                    <div className="meta">
                        <Tag
                            text={`${formattedOpenDate} - ${formattedCloseDate} `}
                            color="dark"
                            bgColor="neutralLight"
                            borderColor="paper"
                            size="s"
                            textWeight="bold"
                            className="tag"
                        />
                        <Tag
                            text={statusMessage}
                            color="light"
                            bgColor="paper"
                            borderColor="neutral"
                            size="xs"
                            textWeight="bold"
                            className="tag"
                        />
                    </div>
                    <div className="title-group">
                        <Heading
                            className="title"
                            size="s"
                            color="light"
                            as="h2"
                        >
                            {title}
                        </Heading>
                        <BodyText size="l" color="medium">
                            by {author.name}
                        </BodyText>
                    </div>
                </div>
            </Link>
        </styled.ShowFeatureCard>
    );
};

interface ShowFeatureCardProps {
    showSlug: string;
    image?: SanityImageDataWithAlt;
    title: string;
    openDate?: string;
    closeDate?: string;
    author: ShowAuthor;
    series: Series;
}
