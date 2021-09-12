import styled from 'styled-components';
import { spacing, borders } from '@web/ui/tokens';

export const YoutubeVideo = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`;
