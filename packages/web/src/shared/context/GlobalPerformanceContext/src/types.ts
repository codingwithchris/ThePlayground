import { ShowCore } from '@web/domains/performance/show';
import { SeasonCore } from '@web/domains/performance/season';
import { SeasonCoreWithShows } from '@web/domains/performance/shared';

export type RawShowData = ShowCore;
export type RawSeasonData = SeasonCore;

export type RawPerformanceDataQuery = () => {
    rawSeasonsData: RawSeasonData[];
    rawShowsData: RawShowData[];
};

export type ShowMapEntry = ShowCore;
export type SeasonMapEntry = SeasonCoreWithShows;

export type GlobalShowMap = Map<string, ShowCore>;
export type GlobalSeasonMap = Map<string, SeasonCoreWithShows>;
