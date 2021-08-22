import React from 'react';
import {
    Avatar,
    BodyText,
    TextButton,
    CardHeader,
    CardContent,
    CardActions,
    Icon,
} from '@web/ui/core';
import {
    Location,
    getGoogleMapsDirectionsURL,
} from '@web/domains/performance/location';

import * as styled from './LocationCard.styles';

export const LocationCard = ({ location, className }: LocationCardProps) => {
    const directionsURL = getGoogleMapsDirectionsURL(
        location.address,
        location.googleTitle
    );

    return (
        <styled.LocationCard bgColor="paperDark" withGutter>
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
                <div className="header">
                    <Icon name="MapMarker" size="s" color="light" />
                    <BodyText color="light" size="m" weight="bold">
                        {location.title}
                    </BodyText>
                </div>
                <div className="address">
                    <BodyText size="s" color="light">
                        {location.address.street} {location.address.city},{' '}
                        {location.address.state}, {location.address.zipcode}
                    </BodyText>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <TextButton
                    to={directionsURL}
                    size="s"
                    color="tertiary"
                    endIcon={<Icon name="NewTab" size="xxs" />}
                >
                    Get Directions
                </TextButton>
            </CardActions>
        </styled.LocationCard>
    );
};

interface LocationCardProps {
    className?: string;
    location: Location;
}
