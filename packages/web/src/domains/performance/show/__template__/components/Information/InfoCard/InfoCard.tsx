import React from 'react';
import { BodyText, CardContent, CardActions } from '@web/ui/core';

import * as styled from './InfoCard.styles';

export const InfoCard: React.FC<InfoCardProps> = ({
    children,
    actions,
    className,
}) => {
    return (
        <styled.InfoCard bgColor="paperDark" className={className} withGutter>
            <CardContent disableSpacing>
                <BodyText
                    color="medium"
                    size="xs"
                    weight="bold"
                    textTransform="uppercase"
                    className="label"
                >
                    Location
                </BodyText>
                {children}
            </CardContent>
            {actions && <CardActions disableSpacing>{actions}</CardActions>}
        </styled.InfoCard>
    );
};

interface InfoCardProps {
    className?: string;
    actions?: JSX.Element[];
}
