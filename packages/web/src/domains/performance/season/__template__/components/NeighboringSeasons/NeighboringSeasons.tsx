import React from 'react';
import { Link } from '@web/domains/app/routing';
import { BodyText, Icon, Heading, Container } from '@web/ui/core';
import { useSingleSeasonContext } from '../../../__context__';

import * as styled from './NeighboringSeasons.styles';

export const NeighboringSeasons = () => {
    const { previousSeason, nextSeason } = useSingleSeasonContext();

    return (
        <styled.NeighboringSeasons bgColor="paperDark">
            <Container className="container" type="full" maxWidth="fluid">
                <div className="previous">
                    {previousSeason ? (
                        <Link
                            to={previousSeason.path}
                            className="previous-link"
                        >
                            <Icon name="ArrowLeft" color="medium" size="m" />
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
                        <div className="unavailable">
                            <BodyText
                                color="medium"
                                size="m"
                                as="h3"
                                weight="bold"
                            >
                                Welcome to the beginning
                            </BodyText>
                            <BodyText color="medium" size="xs">
                                This is where it all started :)
                            </BodyText>
                        </div>
                    )}
                </div>

                <div className="next">
                    {nextSeason ? (
                        <Link to={nextSeason.path} className="next-link">
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
                        <div className="unavailable">
                            <BodyText
                                color="medium"
                                size="m"
                                as="h3"
                                weight="bold"
                            >
                                Next Season
                            </BodyText>
                            <BodyText color="medium" size="xs">
                                Coming Soon...
                            </BodyText>
                        </div>
                    )}
                </div>
            </Container>
        </styled.NeighboringSeasons>
    );
};
