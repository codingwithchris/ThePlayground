import styled, { css } from 'styled-components';

export const TicketTile = styled.li`
    .tile {
        height: 100%;
    }

    .action {
        display: block;
        margin-top: auto;
        width: 100%;
    }

    &[data-status='unavailable'] {
        filter: blur(1px) grayscale(1);
        transform: scale(0.95);
        cursor: not-allowed;
    }
`;
