import { LinkProps } from '@web/domains/app/routing';
import { IconProps } from '@web/ui/core/media';

export type ButtonSize = 's' | 'm' | 'xs';

export interface ButtonBaseProps extends LinkProps {
    size: ButtonSize;
    fullWidth?: true | undefined;
    animateOnClick?: true | undefined;
    animateIconOnHover?: true | undefined;
    startIcon?: React.ReactElement<IconProps>;
    endIcon?: React.ReactElement<IconProps>;
    isLoading?: boolean;
    onClick?: () => void;
}
