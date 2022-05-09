import React from 'react';
import * as styled from './SpotifyEmbed.styles';

export const SpotifyEmbed = ({
    playlistLink,
    className,
}: SpotifyEmbedProps) => {
    const linkParts = playlistLink.split('/').filter((part) => part !== '');
    const playlistID = linkParts.at(-1);

    return (
        <styled.SpotifyEmbed className={className}>
            <iframe
                src={`https://open.spotify.com/embed/playlist/${playlistID}`}
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Embedded Spotify Playlist"
            />
        </styled.SpotifyEmbed>
    );
};

export interface SpotifyEmbedProps {
    playlistLink: string;
    className?: string;
}
