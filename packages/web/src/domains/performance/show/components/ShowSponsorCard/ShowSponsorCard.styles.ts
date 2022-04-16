import styled from 'styled-components';
import { Card } from '@web/ui/core';
import { animation, borders, breakpoints, spacing } from '@web/ui/tokens';

export const ShowSponsorCard = styled(Card)`
    .sponsor-card-wrapper {
        display: flex;
        align-items: flex-start;
        position: relative;
    }

    .sponsor-content {
        margin-left: ${spacing.component.s};
    }

    .sponsor-media {
        align-items: center;
        background-color: ${({ theme }) => theme.surfaces.neutralLight};
        display: flex;
        justify-content: center;
    }

    .sponsor-media[data-icon='true'] {
        padding: ${spacing.component.xxs};
    }

    .sponsor-media,
    .sponsor-media img {
        border-radius: ${borders.circle};
        height: 40px;
        width: 40px;
    }

    .sponsor-meta {
        margin-top: ${spacing.component.xs};
    }

    .sponsor-link {
        padding: ${spacing.component.s};
        position: absolute;
        transition: ${animation.linkHover};
        top: 0;
        right: 0;
        &:hover {
            opacity: 0.7;
        }
    }
`;
