import React from 'react';
import * as styled from './YoutubeVideo.styles';

export const YoutubeVideo = ({ videoID, className }: YoutubeVideoProps) => {
    return (
        <styled.YoutubeVideo className={className}>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${videoID}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </styled.YoutubeVideo>
    );
};

export interface YoutubeVideoProps {
    className?: string;
    videoID: string;
}
