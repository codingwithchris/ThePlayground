import React from 'react';
import { Link } from '@web/domains/app/routing';
import { BodyText, Icon, Heading, Container } from '@web/ui/core';
import { useSingleSeasonContext } from '../../../__context__';

import * as styled from './NeighboringSeasons.styles';

export const NeighboringSeasons = () => {
    const { previousSeason, nextSeason } = useSingleSeasonContext();

    return (
        <styled.NeighboringSeasons bgColor="paperDark">
            <Container className="container" type="full">
                {previousSeason ? (
                    <Link to={previousSeason.path} className="previous">
                        <Icon name="ArrowLeft" color="accent" size="m" />
                        <div className="content">
                            <BodyText
                                color="light"
                                size="l"
                                as="h3"
                                weight="bold"
                            >
                                Previous Season
                            </BodyText>
                            <BodyText color="medium" size="m">
                                {previousSeason.title}
                            </BodyText>
                        </div>
                    </Link>
                ) : (
                    <div className="no-more-previous">
                        <BodyText color="light" size="m" as="h3" weight="bold">
                            No more previous seasons
                        </BodyText>
                        <BodyText color="medium" size="xs">
                            This was our first one :)
                        </BodyText>
                    </div>
                )}

                {nextSeason ? (
                    <Link to={nextSeason.path} className="next">
                        <div className="content">
                            <BodyText
                                color="light"
                                size="l"
                                as="h3"
                                weight="bold"
                            >
                                Next Season
                            </BodyText>
                            <BodyText color="medium" size="m">
                                {nextSeason.title}
                            </BodyText>
                        </div>
                        <Icon name="ArrowRight" color="accent" size="m" />
                    </Link>
                ) : (
                    <div className="coming-soon">
                        <BodyText color="medium" size="m" as="h3" weight="bold">
                            Next Season
                        </BodyText>
                        <BodyText color="medium" size="xs">
                            Coming Soon...
                        </BodyText>
                    </div>
                )}
            </Container>
        </styled.NeighboringSeasons>
    );
};
