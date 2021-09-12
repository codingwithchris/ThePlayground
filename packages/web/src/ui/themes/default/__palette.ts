import { brandColors } from '../brandColors';

import { Palette } from '../palette';

export const palette: Palette = {
    primary: {
        l2: brandColors.orange.l2,
        l1: brandColors.orange.l1,
        base: brandColors.orange.base,
        d1: brandColors.orange.d1,
        d2: brandColors.orange.d2,
    },
    secondary: {
        l2: brandColors.blue.l2,
        l1: brandColors.blue.l1,
        base: brandColors.blue.base,
        d1: brandColors.blue.d1,
        d2: brandColors.blue.d2,
    },
    danger: {
        l2: '#FF242A',
        l1: '#F50004',
        base: '#DB0007',
        d1: '#C20006',
        d2: '#A80005',
    },
    success: {
        l2: '#FB562D',
        l1: '#FA4214',
        base: '#F23405',
        d1: '#D72E04',
        d2: '#BE2904',
    },
    neutral: brandColors.neutral,
    system: brandColors.system,
};
