import React from 'react';

import { BodyText } from '@web/ui/core';

import { Show } from '../../types';
import { ShowPoster } from '../ShowPoster/ShowPoster';

import * as styled from './__styles';

export const ShowPosterGrid: React.FC<ShowPosterGridProps> = ({ shows }) => {
    return (
        <styled.ShowPosterGrid>
            <BodyText className="count" size="s" color="medium">
                [ we successfully produced {shows.length} shows ]
            </BodyText>
            <BodyText className="instructions" size="m" color="light">
                Select a show below to see detailed information
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
    shows: Show[];
}
