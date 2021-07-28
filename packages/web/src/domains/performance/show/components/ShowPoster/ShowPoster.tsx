import React from 'react';

import { Link } from '@web/domains/app/routing';
import { SanityImageDataWithAlt } from '@web/shared/types';

import { BodyText, Heading, BrandImage, BackgroundOverlay } from '@web/ui/core';

import { useConfigContext } from '@web/shared/context';
import * as styled from './__styles';

export const ShowPoster: React.FC<ShowPosterProps> = ({
    title,
    slug,
    authorName,
    image,
    season,
}) => {
    /**
     * Todo: 1. Use performance date range to extract a "prettified" version of the dates. Ex. April 23-28, 2019
     * Todo: 2, Turn date extraction methodology into custom hook
     */

    const { links } = useConfigContext();

    return (
        <styled.ShowPoster>
            <Link
                className="wrapper"
                to={links.getShow(season.slug, slug) ?? '/'}
            >
                <BrandImage
                    image={image.asset}
                    alt={image.alt ?? ''}
                    objectFit="cover"
                    objectPosition="center center"
                    className="image"
                />
                <BackgroundOverlay
                    variant="verticalGradientDark"
                    className="overlay"
                />

                <div className="content">
                    <Heading className="title" size="xs" color="light" as="h2">
                        {title}
                    </Heading>
                    <BodyText
                        className="author"
                        size="m"
                        color="light"
                        weight="bold"
                    >
                        by {authorName}
                    </BodyText>
                    <BodyText className="season" size="s" color="medium">
                        {season.title}
                    </BodyText>
                </div>
            </Link>
        </styled.ShowPoster>
    );
};

export interface ShowPosterProps {
    title: string;
    slug: string;
    authorName: string;
    season: {
        slug: string;
        title: string;
    };
    image: SanityImageDataWithAlt;
    openingDate: string;
    closingDate: string;
}
