import React from 'react';

import { Divider } from '@web/ui/core';
import { DigitalProgramPageProps } from './types';

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
            Hesdlfknasdfkjnasldijfnasoidufbaiosudfboiasufhaioshufiasuhdfiasuhfoiasuhfasofhiuasdfllo
        </>
    );
};

interface DigitalProgramViewProps {
    show: DigitalProgramPageProps;
    slug: string;
    seasonSlug: string;
    url: string;
}
