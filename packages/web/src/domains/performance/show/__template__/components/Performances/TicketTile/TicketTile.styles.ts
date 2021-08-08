import styled, { css } from 'styled-components';
import { spacing } from '@web/ui/tokens';

export const TicketTile = styled.li<{ isAvailable: boolean }>`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
