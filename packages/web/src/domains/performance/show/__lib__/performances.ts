import { isPast, parseISO } from 'date-fns';
import { ShowPerformance } from '../types';

export const isCancelledPerformance = (status: ShowPerformance['status']) => {
    return status === 'cancelled';
};

export const isAvailablePerformance = (performance: ShowPerformance) => {
    const { status, datetime } = performance;
    const date = parseISO(datetime);
    return !isCancelledPerformance(status) && !isPast(date);
};

export const getTotalPerformanceCount = (performances: ShowPerformance[]) => {
    if (performances.length === 0) {
        return 'tbd';
    }

    const total = performances.filter(
        ({ status }) => !isCancelledPerformance(status)
    );

    return total.length.toString();
};

export const getRemainingPerformanceCount = (
    performances: ShowPerformance[]
) => {
    if (performances.length === 0) {
        return 'tbd';
    }

    const remaining = performances.filter((performance) =>
        isAvailablePerformance(performance)
    );

    return remaining.length.toString();
};
