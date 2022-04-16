import React from 'react';

import { Divider } from '@web/ui/core';
import { DigitalProgramPageProps } from './types';
import {
    AlsoThisSeason,
    DirectorNote,
    Header,
    SupportUsCTA,
    SponsorsHighlight,
    SponsorsShowcase,
    SpotifyCallout,
    TeamBioGallery,
} from './components';

export const DigitalProgramView = ({
    show,
    slug,
    seasonSlug,
    url,
}: DigitalProgramViewProps) => {
    return (
        <>
            {show.artists?.directors?.length > 0 && (
                <Header title={show.title} author={show.author} />
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
            {show.promo.soundtrack?.provider === 'spotify' &&
                show.promo.soundtrack.link && (
                    <SpotifyCallout playlistLink={show.promo.soundtrack.link} />
                )}
            <SponsorsHighlight />
            {(show.sponsors?.official ||
                show.sponsors?.highlight ||
                show.sponsors?._rawSpecialThanks) && (
                <SponsorsShowcase sponsors={show.sponsors} />
            )}
            <SupportUsCTA />
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
