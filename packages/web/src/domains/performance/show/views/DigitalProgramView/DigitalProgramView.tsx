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
    SpotifyCallout,
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
            {show.artists?.directors?.length > 0 && (
                <Header
                    title={show.title}
                    directors={show.artists.directors}
                    author={show.author}
                />
            )}
            {show._rawDirectorsNote?.length > 0 && (
                <>
                    <DirectorNote content={show._rawDirectorsNote} />
                    <Divider color="paper" />
                </>
            )}
            {(show.artists?.actors ||
                show.artists?.crewMembers ||
                show.artists?.designers ||
                show.artists?.shadows) && (
                <>
                    <TeamBioGallery artists={show.artists} />
                    <Divider color="neutralDark" />
                </>
            )}
            <SpotifyCallout />
            <SponsorsHighlight />
            <Divider color="paper" />
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
