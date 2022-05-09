import React from 'react';
import { Link } from '@web/domains/app/routing';
import { BodyText, Icon, Heading, Container, Tag } from '@web/ui/core';
import { useSingleShowContext } from '../../../../__context__';

import * as styled from './NeighboringShows.styles';

export const NeighboringShows = () => {
    const { previousShow, nextShow } = useSingleShowContext();

    return (
        <styled.NeighboringShows bgColor="paperDark">
            <Container className="container" type="full" maxWidth="fluid">
                <div className="previous">
                    {previousShow ? (
                        <Link to={previousShow.path} className="previous-link">
                            <Tag
                                text={`${previousShow.season.slug.current} season`}
                                size="xs"
                                color="medium"
                                bgColor="paperDark"
                                borderColor="neutralDark"
                                className="tag"
                            />
                            <Icon name="ArrowLeft" color="medium" size="m" />
                            <div className="content">
                                <BodyText
                                    color="light"
                                    size="l"
                                    as="h3"
                                    weight="bold"
                                >
                                    Previous Show
                                </BodyText>
                                <BodyText color="medium" size="m">
                                    {previousShow.title}
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
                    {nextShow ? (
                        <Link to={nextShow.path} className="next-link">
                            <div className="content">
                                <Tag
                                    text={`${nextShow.season.slug.current} season`}
                                    size="xs"
                                    color="medium"
                                    bgColor="paperDark"
                                    borderColor="neutralDark"
                                    className="tag"
                                />
                                <BodyText
                                    color="light"
                                    size="l"
                                    as="h3"
                                    weight="bold"
                                >
                                    Next Show
                                </BodyText>
                                <BodyText color="medium" size="m">
                                    {nextShow.title}
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
                                Next Show
                            </BodyText>
                            <BodyText color="medium" size="xs">
                                Coming Soon...
                            </BodyText>
                        </div>
                    )}
                </div>
            </Container>
        </styled.NeighboringShows>
    );
};
