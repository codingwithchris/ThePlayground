import React from 'react';
import { useSingleSeasonContext } from '../../../__context__';

import * as styled from './NeighboringSeasons.styles';

export const NeighboringSeasons = () => {
    const { previousSeason, nextSeason } = useSingleSeasonContext();

    return (
        <styled.NeighboringSeasons>
            {previousSeason?.title}
            {nextSeason?.title}
        </styled.NeighboringSeasons>
    );
};
