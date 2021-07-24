import React from 'react';
import { format, isValid } from 'date-fns';
import * as styled from './DateRange.styles';

export const DateRange: React.FC<DateRangeProps> = ({
    startDate,
    endDate,
    icon,
}) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const year = new Date(endDate);

    return (
        <styled.DateRange>
            {icon && icon}
            <span>
                {format(start, 'MMM dd')} - {format(end, 'MMM dd')},{' '}
                {format(year, 'yyyy')}
            </span>
        </styled.DateRange>
    );
};

interface DateRangeProps {
    startDate: string;
    endDate: string;
    icon?: JSX.Element;
}
