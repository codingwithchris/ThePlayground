import React from 'react';
import styled from 'styled-components';
import { borders, breakpoints, grid, spacing } from '@web/ui/tokens';

import { BodyText, Container, Section, SectionProps } from '@web/ui/core';
import {
    FullSeasonOverview,
    FullSeasonOverviewProps,
} from '@web/domains/performance/season';

const StyledSeasonOverviewSection = styled(Section)`
    padding: ${spacing.layout.l} 0;
`;

export const SeasonOverviewSection = ({ season }: SeasonOverviewProps) => {
    return (
        <StyledSeasonOverviewSection bgColor="paperDark" className="">
            <Container>
                <FullSeasonOverview season={season} />
            </Container>
        </StyledSeasonOverviewSection>
    );
};

interface SeasonOverviewProps extends SectionProps {
    season: FullSeasonOverviewProps['season'];
}
