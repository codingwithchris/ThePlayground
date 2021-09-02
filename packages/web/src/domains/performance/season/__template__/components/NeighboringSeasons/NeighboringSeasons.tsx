import React from 'react';
import { Link } from '@web/domains/app/routing';
import { BodyText, Heading } from '@web/ui/core';
import { useSingleSeasonContext } from '../../../__context__';

import * as styled from './NeighboringSeasons.styles';

export const NeighboringSeasons = () => {
    const { previousSeason, nextSeason } = useSingleSeasonContext();

    return (
        <styled.NeighboringSeasons>
            <div className="previous">
                <Link to={previousSeason?.path}>
                    <Heading color="light" size="s" as="h3">
                        Previous Season
                    </Heading>
                    <BodyText color="medium" size="l" weight="bold">
                        {previousSeason?.title}
                    </BodyText>
                </Link>
            </div>
            <div className="next">
                <Link to={nextSeason?.path}>
                    <Heading color="light" size="s" as="h3">
                        Next Season
                    </Heading>
                    <BodyText color="medium" size="l" weight="bold">
                        {nextSeason?.title}
                    </BodyText>
                </Link>
            </div>
        </styled.NeighboringSeasons>
    );
};
