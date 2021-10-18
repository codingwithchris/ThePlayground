import React from 'react';
import styled from 'styled-components';
import { useOverlay } from '@web/shared/hooks';
import { animation, borders, breakpoints, spacing } from '@web/ui/tokens';
import { composeArtistName } from '@web/domains/performance/artist';
import { Link } from '@web/domains/app/routing';
import {
    BrandImage,
    Card,
    CardContent,
    Divider,
    CardActionArea,
    CardActions,
    BodyText,
    Icon,
    Modal,
    CloseOverlay,
    GhostButton,
    OutlineButton,
    TextButton,
    PortableText,
    Tag,
    IconButton,
} from '@web/ui/core';

import { ArtistBio } from '../../../types';

const StyledArtistHighlight = styled(Card)`
    position: relative;
    .content {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        text-align: left;
    }

    .artist-media {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-right: ${spacing.component.s};
    }

    .artist-image {
        height: 80px;
        width: 80px;

        img {
            border: 2px solid ${({ theme }) => theme.surfaces.accent};
            border-radius: 50%;
            height: 80px;
            width: 80px;
        }
    }

    .pronouns {
        position: absolute;
        top: ${spacing.component.xs};
        right: ${spacing.component.xs};
    }

    .name-group {
        align-items: flex-end;
        display: flex;
        margin-bottom: ${spacing.component.xxs};
    }

    .open-bio-action {
        transition: ${animation.cardHover};
        &:hover > .content {
            background-color: ${({ theme }) => theme.surfaces.default};
        }
    }

    .bio {
        margin-bottom: ${spacing.component.m};
    }
`;

const StyledArtistModal = styled(Modal)`
    .content {
        background-color: ${({ theme }) => theme.surfaces.paper};
    }

    header {
        border-color: ${({ theme }) => theme.surfaces.paperLight};
    }

    header .close {
        svg {
            color: ${({ theme }) => theme.icons.light.color.default};
        }
        &:before {
            background-color: ${({ theme }) =>
                theme.actions.secondary.background.hover};
        }
    }

    .artist-header {
        margin-bottom: ${spacing.component.m};
        text-align: center;

        ${breakpoints.s} {
            margin-top: ${spacing.component.xxl};
        }

        .artist-info {
            margin-top: ${spacing.component.l};
        }

        img {
            border-radius: ${borders.imageRadius};
        }

        .role {
            margin-top: ${spacing.component.s};
        }
    }

    .artist-content {
        padding: ${spacing.component.l};
        ${breakpoints.s} {
            padding: ${spacing.component.xl};
        }

        a {
            text-decoration: underline;
        }

        .bio-header {
            margin-bottom: ${spacing.component.s};
        }
    }
`;

// INSPO: Instagram
export const ArtistHighlight = ({
    artistBio,
    className,
}: ArtistHighlightProps) => {
    const [isOpen, setIsOpen, toggle] = useOverlay();

    const { artist, role, _rawBio: bio } = artistBio;

    const name = composeArtistName({
        first: artist.firstName,
        last: artist.lastName,
    });

    const fullName = composeArtistName({
        first: artist.firstName,
        middle: artist.middleName,
        last: artist.lastName,
    });

    return (
        <>
            <StyledArtistHighlight
                variant="outlined"
                borderColor="paper"
                className={className}
                spacing={{ desktop: 's', mobile: 'xs' }}
            >
                {bio ? (
                    <button
                        onClick={toggle}
                        type="button"
                        className="open-bio-action"
                    >
                        <CardContent className="content" verticalSpacing="m">
                            <div className="artist-media">
                                <BrandImage
                                    className="artist-image"
                                    image={artist.headshot.asset}
                                    alt={artist.headshot.alt}
                                />
                            </div>
                            <div className="artist-content">
                                <div className="name-group">
                                    <BodyText
                                        size="s"
                                        weight="bold"
                                        color="light"
                                    >
                                        {name}
                                    </BodyText>
                                </div>
                                <BodyText size="xs" color="light">
                                    {role}
                                </BodyText>
                            </div>
                        </CardContent>
                    </button>
                ) : (
                    <CardContent className="content" verticalSpacing="m">
                        <div className="artist-media">
                            <BrandImage
                                className="artist-image"
                                image={artist.headshot.asset}
                                alt={artist.headshot.alt}
                            />
                        </div>
                        <div className="artist-content">
                            <div className="name-group">
                                <BodyText size="s" weight="bold" color="light">
                                    {name}
                                </BodyText>
                            </div>

                            <BodyText size="xs" color="light">
                                {role}
                            </BodyText>
                            <BodyText
                                size="xs"
                                color="medium"
                                className="open-bio-instructions"
                            />
                        </div>
                    </CardContent>
                )}
                <BodyText color="medium" size="xs" className="pronouns">
                    {artist.pronouns}
                </BodyText>
            </StyledArtistHighlight>
            <StyledArtistModal
                isOpen={isOpen}
                title={artist.firstName}
                onCloseHandler={setIsOpen}
                header={<CloseOverlay onCloseHandler={setIsOpen} />}
                containerSize="s"
                className="modal"
            >
                <div className="artist-header">
                    <BrandImage
                        image={artist.headshot.asset}
                        alt={artist.headshot.alt}
                    />
                    <div className="artist-info">
                        <BodyText
                            size="l"
                            weight="bold"
                            color="light"
                            className="name"
                        >
                            {fullName}
                        </BodyText>
                        <BodyText size="s" color="medium" className="pronouns">
                            {artist.pronouns}
                        </BodyText>

                        <BodyText size="m" color="light" className="role">
                            {role}
                        </BodyText>
                    </div>
                </div>
                <Divider color="paperLight" />
                <div className="artist-content">
                    <BodyText className="bio-header" color="medium" size="s">
                        artist bio
                    </BodyText>
                    <PortableText
                        content={bio}
                        config={{
                            block: {
                                bodyText: { color: 'light', size: 'm' },
                            },
                        }}
                    />
                </div>
            </StyledArtistModal>
        </>
    );
};

interface ArtistHighlightProps {
    artistBio: ArtistBio;
    className?: string;
}
