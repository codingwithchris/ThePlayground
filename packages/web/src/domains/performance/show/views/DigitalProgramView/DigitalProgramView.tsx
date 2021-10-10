import React from 'react';

import { Divider } from '@web/ui/core';
import { DigitalProgramPageProps } from './types';
import {
    AlsoThisSeason,
    DirectorNote,
    Header,
    InstagramCallout,
    ShareCallout,
    SponsorsHighlight,
    SupportCallout,
    TeamBioGallery,
} from './components';

// Program Nav
// Title and welcome message
// Directors, actors, designers, crew
// instagram hashtag
// tell your friends
// other shows this season
// support us
// sound track
// trailer

export const DigitalProgramView = ({
    show,
    slug,
    seasonSlug,
    url,
}: DigitalProgramViewProps) => {
    return (
        <>
            <Header
                title={show.title}
                directors={show.artists.directors}
                author={show.author}
            />
            <DirectorNote content={show._rawDirectorsNote} />
            <TeamBioGallery />
            <AlsoThisSeason />
        </>
    );
};

interface DigitalProgramViewProps {
    show: DigitalProgramPageProps;
    slug: string;
    seasonSlug: string;
    url: string;
}
