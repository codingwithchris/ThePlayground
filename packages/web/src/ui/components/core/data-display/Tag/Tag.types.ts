import { AvailableSurface, AvailableTypographyTheme } from '@web/ui/themes';

export interface TagProps {
    text: string;
    media?: JSX.Element;
    size: 'xs' | 's' | 'm';
    bgColor: AvailableSurface;
    borderColor: AvailableSurface;
    color: AvailableTypographyTheme;
    textWeight?: 'regular' | 'bold';
    className?: string;
    isFullWidth?: boolean;
}
