import { DecoratedShow } from '@web/domains/performance/show';
import { Season } from '@web/domains/performance/season';
import { DecoratedSeasonWithShows } from '@web/domains/performance/shared';

export type RawShowData = DecoratedShow;
export type RawSeasonData = Season;

export type RawPerformanceDataQuery = () => {
    rawSeasonsData: RawSeasonData[];
    rawShowsData: RawShowData[];
};

export type ShowMapEntry = DecoratedShow;
export type SeasonMapEntry = DecoratedSeasonWithShows;

export type GlobalShowMap = Map<string, DecoratedShow>;
export type GlobalSeasonMap = Map<string, DecoratedSeasonWithShows>;
