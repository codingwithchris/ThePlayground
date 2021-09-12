import React from 'react';
import styled from 'styled-components';
import {
    GrittyHeading,
    BodyText,
    Section,
    Container,
    PortableText,
    YoutubeVideo,
    Divider,
} from '@web/ui/core';
import { spacing, breakpoints } from '@web/ui/tokens';
import { Link } from '@web/domains/app/routing';

const StyledTrailerSection = styled(Section)`
    .credit {
        padding: ${spacing.component.l} 0;
        text-align: center;

        a {
            text-decoration: underline;
            color: ${({ theme }) => theme.typography.light};
        }
    }
`;

export const TheTrailer = ({
    videoID,
    credit,
    creditRole,
}: TheTrailerProps) => {
    return (
        <StyledTrailerSection bgColor="paperDark">
            <Container type="full" maxWidth="fluid">
                <YoutubeVideo videoID={videoID} />
            </Container>
            {credit?.title && (
                <Container maxWidth="s">
                    <BodyText color="medium" size="xs" className="credit">
                        [ {creditRole} by{' '}
                        {credit.website ? (
                            <Link to={credit.website}>{credit.title}</Link>
                        ) : (
                            credit.title
                        )}{' '}
                        ]
                    </BodyText>
                </Container>
            )}
        </StyledTrailerSection>
    );
};

interface TheTrailerProps {
    videoID: string;
    credit?: {
        title: string;
        website: string;
    };
    creditRole?: string;
}
