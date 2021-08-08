import styled, { css } from 'styled-components';
import { spacing } from '@web/ui/tokens';

export const TicketTile = styled.li<{ isAvailable: boolean }>`
    .tile {
        height: 100%;
    }

    .action {
        display: block;
        width: 100%;
    }
`;
