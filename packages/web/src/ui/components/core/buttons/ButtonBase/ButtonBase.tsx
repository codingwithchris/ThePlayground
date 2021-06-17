import React from 'react';
import classnames from 'classnames';

import { CircularProgress } from '@web/core/components/progress';

import { ButtonBaseProps } from './ButtonBase.d';
import * as styled from './ButtonBase.styles';

export const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
    const {
        children,
        className,
        size,
        fullWidth,
        animateOnClick,
        animateIconOnHover,
        startIcon,
        endIcon,
        isLoading,
        onClick,
        ...others
    } = props;

    const classes = classnames(
        {
            '--full': fullWidth,
            '--animate-click': animateOnClick,
            '--icon-hover': animateIconOnHover,
            '--loading': isLoading,
        },
        className
    );

    const loaderIconSize = size === 'm' ? 's' : 'xs';

    return (
        <styled.ButtonBase
            className={classes}
            size={size}
            onClick={onClick}
            {...others}
        >
            {isLoading ? (
                <div className="loader">
                    <CircularProgress size={loaderIconSize} />
                </div>
            ) : (
                <>
                    {startIcon && <div className="start-icon">{startIcon}</div>}
                    {children}
                    {endIcon && <div className="end-icon">{endIcon}</div>}
                </>
            )}
        </styled.ButtonBase>
    );
};

export * from './ButtonBase.d';
