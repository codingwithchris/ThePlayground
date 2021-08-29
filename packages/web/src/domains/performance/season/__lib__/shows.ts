import { ShowCore } from '@web/domains/performance/show';

export const hasShowsInSeason = (shows?: ShowCore[]) => {
    return shows && shows.length > 0;
};
