import styled from 'styled-components';
import { rgba } from 'polished';
import { borders, grid, spacing, zIndex } from '@web/ui/tokens';
import { OverlayBase } from '../OverlayBase/OverlayBase';
import { IModal } from './Modal.d';

export const Modal = styled(OverlayBase)<IModal>`
    .backdrop,
    .container {
        inset: 0 !important;
        position: fixed !important;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${zIndex.portal} !important;
    }

    .backdrop {
        background: ${({ theme }) => rgba(theme.surfaces.default, 0.8)};
        overflow-y: auto !important;
    }

    .container {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: ${spacing.component.xl};
    }

    .content {
        background-color: ${({ theme }) => theme.surfaces.neutralLight};
        box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
        border-radius: ${borders.modalRadius};
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-height: 100%;
        max-width: ${({ containerSize }) => grid[containerSize!]};
        overflow: hidden;
        --webkit-overflow-scrolling: touch;
        position: relative;
        width: 100%;
    }

    header {
        flex: 0 0 56px; /* magic number for height o modal close container */
        border-bottom: 1px solid ${({ theme }) => theme.palette.neutral[300]};
    }

    .body {
        overflow: auto;
    }
`;
