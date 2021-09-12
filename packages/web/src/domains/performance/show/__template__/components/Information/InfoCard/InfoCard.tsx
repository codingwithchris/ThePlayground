import React from 'react';
import { BodyText, CardContent, CardActions, CardProps } from '@web/ui/core';

import * as styled from './InfoCard.styles';

export const InfoCard: React.FC<InfoCardProps> = ({
    label,
    actions,
    children,
    className,
    ...props
}) => {
    return (
        <styled.InfoCard className={className} withGutter {...props}>
            <CardContent disableSpacing>
                {label && (
                    <div className="label">
                        <BodyText
                            color="medium"
                            size="xs"
                            weight="bold"
                            className="text"
                        >
                            {label}
                        </BodyText>
                        <div className="separator" />
                    </div>
                )}
                {children}
            </CardContent>
            {actions && <CardActions disableSpacing>{actions}</CardActions>}
        </styled.InfoCard>
    );
};

interface InfoCardProps extends CardProps {
    className?: string;
    label?: string;
    actions?: JSX.Element[];
}
