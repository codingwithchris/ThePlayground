import { Show } from '@web/domains/performance/show';

export const hasShowsInSeason = (shows?: Show[]) =>
    Boolean(shows && shows.length > 0);
