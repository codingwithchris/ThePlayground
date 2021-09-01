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
import { useConfigContext } from '@web/shared/context';

import { Series } from '@web/domains/performance/series';

import { getShowStatus } from '../../__lib__';
import { SHOW_STATUS, SHOW_STATUS_MESSAGE } from '../../constants';
import { ShowAuthor } from '../../types';

import * as styled from './ShowFeatureCard.styles';

export const ShowFeatureCard = ({
    image,
    seasonSlug,
    slug,
    title,
    openDate,
    closeDate,
    author,
    series,
}: ShowFeatureCardProps) => {
    const { links } = useConfigContext();
    const status = getShowStatus(openDate, closeDate);
    const statusMessage = SHOW_STATUS_MESSAGE[status];

    const isArchived = status === SHOW_STATUS.PAST;

    return (
        <styled.ShowFeatureCard isArchived={isArchived}>
            <Link to={links.getShow(seasonSlug, slug)} className="wrapper">
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
                    <div>
                        <Tag
                            text={statusMessage}
                            color="dark"
                            bgColor="neutralLight"
                            borderColor="neutral"
                            size="s"
                            textWeight="bold"
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
    image?: SanityImageDataWithAlt;
    slug: string;
    seasonSlug: string;
    title: string;
    openDate?: string;
    closeDate?: string;
    author: ShowAuthor;
    series: Series;
}
