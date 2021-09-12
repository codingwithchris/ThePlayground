import { Show } from '@web/domains/performance/show';

export const hasShowsInSeason = (shows?: Show[]) => {
    return shows && shows.length > 0;
};
