import { useStaticQuery, graphql } from 'gatsby';
import { useConfigContext } from '@web/shared/context';
import { getShowStatus } from '@web/domains/performance/show'
import {
    RawPerformanceDataQuery,
    RawSeasonData,
    RawShowData,
    GlobalShowMap,
    GlobalSeasonMap,
} from './types';

/**
 * GraphQL Queries
 */
export const useQueryAllPerformanceData: RawPerformanceDataQuery = () => {
    const {
        allSanitySeason: { nodes: rawSeasonsData },
        allSanityShow: { nodes: rawShowsData },
    } = useStaticQuery(graphql`
        query AllPerformancesQuery {
            allSanitySeason(
                filter: { doNotDisplay: { eq: false } }
                sort: { order: DESC, fields: title }
            ) {
                nodes {
                    title
                    tagline
                    slug {
                        current
                    }
                }
            }
            allSanityShow(
                filter: { toggles: { isHiddenFromWebsite: { eq: false } } }
                sort: { order: DESC, fields: closeDate }
            ) {
                nodes {
                    title
                    slug {
                        current
                    }
                    openDate
                    closeDate
                    author {
                        name
                    }
                    season {
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    return { rawSeasonsData, rawShowsData };
};

/**
 *
 * @param shows
 * @param seasons
 * @returns
 */
export const useBuildPerformanceDataMap = (
    rawSeasons: RawSeasonData[],
    rawShows: RawShowData[]
) => {
    const { links } = useConfigContext();

    const shows: GlobalShowMap = new Map();
    const seasons: GlobalSeasonMap = new Map();

    /**
     * Build a data map of all of the shows that exist on our site
     */
    rawShows.forEach((show) => {
        shows.set(show.slug.current, {
            ...show,
            path: links.getShow(show.season.slug.current, show.slug.current),
            status: getShowStatus(show.openDate, show.closeDate),
            season: {
                ...show.season,
                path: links.getSeason(show.season.slug.current),
            },
        });
    });

    /**
     * Build a data map of all of the Seasons that exist on our site.
     * For each season, we are also including a data map of
     * shows from this season. Essentially we want to do this calculation
     */
    rawSeasons.forEach((season) => {
        const showsThisSeason = [...shows].filter(
            ([slug, showData]) => slug === season.slug.current
        );

        seasons.set(season.slug.current, {
            ...season,
            path: links.getSeason(season.slug.current),
            shows: showsThisSeason.map(([, show]) => show),
        });
    });

    return { seasons, shows };
};
