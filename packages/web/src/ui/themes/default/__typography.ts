import { palette } from './__palette';
import { TypographyThemes } from '../index.d';

export const typography: TypographyThemes = {
    light: palette.neutral[200],
    medium: palette.neutral[400],
    dark: palette.secondary.base,
    accentLight: palette.primary.l1,
    accent: palette.primary.base,
    accentDark: palette.primary.d1,
    highlight: palette.secondary.l2,
    danger: palette.danger.base,
    dangerLight: palette.danger.l2,
    success: palette.success.base,
};
