import React from 'react';

import { BodyText } from '@web/ui/core';

import { ShowCoreWithPoster } from '../../types';
import { ShowPoster } from '../ShowPoster/ShowPoster';

import * as styled from './__styles';

export const ShowPosterGrid: React.FC<ShowPosterGridProps> = ({ shows }) => {
    /**
     * Todo: 1. Sort shows based on performance dates
     * Todo: 2. Turn sorting methodology into reuseable hook
     */

    return (
        <styled.ShowPosterGrid>
            <BodyText className="instructions" size="m" color="medium">
                Select a show to see detailed information
            </BodyText>
            <div className="grid">
                {shows.map((show) => {
                    return (
                        <ShowPoster
                            key={show.title}
                            title={show.title}
                            authorName={show.author.name}
                            slug={show.slug.current}
                            image={show.posterImage}
                            season={{
                                title: show.season.title,
                                slug: show.season.slug.current,
                            }}
                            openingDate={show.openDate}
                            closingDate={show.closeDate}
                        />
                    );
                })}
            </div>
        </styled.ShowPosterGrid>
    );
};

export interface ShowPosterGridProps {
    shows: ShowCoreWithPoster[];
}
