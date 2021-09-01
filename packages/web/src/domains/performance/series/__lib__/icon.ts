import { AvailableIconName } from '@web/ui/core';
import { SERIES_ID } from '../constants';

const seriesIconMap: Record<SERIES_ID, AvailableIconName> = {
    [SERIES_ID.NERVE]: 'Fire',
    [SERIES_ID.COACT]: 'Handshake',
    [SERIES_ID.ALTER_EGO]: 'Brain',
};

export const getSeriesIconName = (seriesID: SERIES_ID): AvailableIconName => {
    return seriesIconMap[seriesID];
};
