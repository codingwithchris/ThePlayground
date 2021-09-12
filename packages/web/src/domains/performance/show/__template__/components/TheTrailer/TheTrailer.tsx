import React from 'react';
import styled from 'styled-components';
import {
    GrittyHeading,
    BodyText,
    Section,
    Container,
    PortableText,
    YoutubeVideo,
} from '@web/ui/core';
import { spacing, breakpoints } from '@web/ui/tokens';

const StyledTrailerSection = styled(Section)`
    padding: ${spacing.layout.s};
    ${breakpoints.m} {
        padding: ${spacing.layout.l} 0;
    }
    .title {
        margin-bottom: ${spacing.layout.s};
    }
`;

export const TheTrailer = ({ videoID, credit }: TheTrailerProps) => {
    return (
        <StyledTrailerSection>
            <Container maxWidth="fluid">
                {credit.title && (
                    <BodyText color="medium" size="s">
                        Thanks to {credit.title} for helping to make this
                        trailer happen
                    </BodyText>
                )}

                <YoutubeVideo videoID={videoID} />
            </Container>
        </StyledTrailerSection>
    );
};

interface TheTrailerProps {
    videoID: string;
    credit: {
        title: string;
        website: string;
    };
}
