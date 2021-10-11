import React from 'react';
import styled from 'styled-components';
import { useOverlay } from '@web/shared/hooks';
import { breakpoints, spacing } from '@web/ui/tokens';
import { composeArtistName } from '@web/domains/performance/artist';
import {
    BrandImage,
    Card,
    CardActionArea,
    BodyText,
    Icon,
    Modal,
    CloseOverlay,
    OutlineButton,
    TextButton,
    PortableText,
} from '@web/ui/core';
import { ArtistBio } from '../../../types';

const StyledArtistHighlight = styled(Card)`
    align-items: center;

    .artist-media {
        margin-right: ${spacing.component.s};
    }

    .artist-media img {
        border: 2px solid ${({ theme }) => theme.surfaces.accent};
        border-radius: 50%;
    }

    .name-group {
        align-items: flex-end;
        display: flex;
        margin-bottom: ${spacing.component.xxs};
        .pronouns {
            margin-left: ${spacing.component.xxs};
        }
    }
`;

// INSPO: Instagram
export const ArtistHighlight = ({
    artistBio,
    className,
}: ArtistHighlightProps) => {
    const [isOpen, setIsOpen, toggle] = useOverlay();

    const { artist, role, bio } = artistBio;

    const name = composeArtistName({
        first: artist.firstName,
        middle: artist.middleName,
        last: artist.lastName,
    });

    return (
        <StyledArtistHighlight
            layout="inline"
            variant="outlined"
            borderColor="paper"
            withGutter
            className={className}
        >
            <div className="artist-media">
                <BrandImage
                    image={artist.headshot.asset}
                    alt={artist.headshot.alt}
                />
            </div>
            <div className="artist-content">
                <div className="name-group">
                    <BodyText size="s" weight="bold" color="light">
                        {name}
                    </BodyText>
                    <BodyText size="xs" color="medium" className="pronouns">
                        {artist.pronouns}
                    </BodyText>
                </div>

                <BodyText size="xs" color="light">
                    {role}
                </BodyText>
            </div>
            <OutlineButton
                size="s"
                onClick={toggle}
                color="tertiary"
                startIcon={<Icon name="Share" size="xs" />}
                animateOnClick
            >
                View Bio
            </OutlineButton>
            <Modal
                title={`${name} Bio`}
                containerSize="xxs"
                isOpen={isOpen}
                onCloseHandler={setIsOpen}
                header={<CloseOverlay onCloseHandler={setIsOpen} />}
            >
                {/* TODO: query raw content and use portable text to output bio */}
                Artist Bio
            </Modal>
        </StyledArtistHighlight>
    );
};

interface ArtistHighlightProps {
    artistBio: ArtistBio;
    className?: string;
}
