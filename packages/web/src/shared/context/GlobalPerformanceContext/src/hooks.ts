import { useStaticQuery, graphql } from 'gatsby';
import { useConfigContext } from '@web/shared/context';
import { getShowStatus } from '@web/domains/performance/show';
import {
    RawPerformanceDataQuery,
    RawSeasonData,
    RawShowData,
    GlobalShowMap,
    GlobalSeasonMap,
} from './types';

/**
 * Query all publicly available Seasons and Shows along with core/essential data
 * and sort the entries from newest to oldest (DESC),
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
                    performances {
                        status
                        datetime
                        isPWYW
                    }
                    series {
                        identifier
                        title
                    }
                    season {
                        slug {
                            current
                        }
                    }
                    cardImage {
                        asset {
                            gatsbyImageData(
                                placeholder: BLURRED
                                width: 600
                                fit: FILL
                            )
                        }
                        alt
                    }
                    teaser
                    rating
                }
            }
        }
    `);

    return { rawSeasonsData, rawShowsData };
};

/**
 * Take the raw data from our global Season & Show queries and build well-considered
 * data Maps with bidirectional references that include hydrated data such as
 * full paths and show statuses (data that can is dynamically assembled on the client).
 *
 * @param shows The raw Shows query data
 * @param seasons The raw Seasons query data
 *
 * @returns Season & Show Data Maps
 */
export const useBuildPerformanceDataMap = (
    rawSeasons: RawSeasonData[],
    rawShows: RawShowData[]
) => {
    const { links } = useConfigContext();

    const shows: GlobalShowMap = new Map();
    const seasons: GlobalSeasonMap = new Map();

    /**
     * Because the seasons and shows are sorted with the "newest" entry higher in the array,
     * we need to reverse the order it to get the proper "number" position later on.
     *
     * ! We are making a new array before reversing because `reverse()` mutates the original array and causes issues.
     */
    const reversedShows = [...rawShows].reverse();
    const reversedSeasons = [...rawSeasons].reverse();

    /**
     * Build a data map of all of the shows that exist on our site
     */
    rawShows.forEach((show) => {
        shows.set(show.slug.current, {
            ...show,
            path: links.getShow(show.season.slug.current, show.slug.current),
            status: getShowStatus(show.openDate, show.closeDate),
            /**
             * What number season out of the total season count is this?
             *
             * Because the seasons are sorted with the "newest" show higher in the array,
             * we need to reverse the order in to get the show's proper "number" count.
             * We add 1 to the end to represent starting at a non-zero index for human readability
             */

            number:
                reversedShows.findIndex(
                    (_show) => _show.slug.current === show.slug.current
                ) + 1,
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
            ([_, show]) => show.season.slug.current === season.slug.current
        );

        seasons.set(season.slug.current, {
            ...season,
            path: links.getSeason(season.slug.current),
            /**
             * What number season out of the total season count is this?
             *
             * Because the seasons are sorted with the "newest" show higher in the array,
             * we need to reverse the order in to get the season's proper "number" count.
             * We add 1 to the end to represent starting at a non-zero index for human readability
             */
            number:
                reversedSeasons.findIndex(
                    (_season) => _season.slug.current === season.slug.current
                ) + 1,
            shows: showsThisSeason.map(([_, show]) => show),
        });
    });

    return { seasons, shows };
};
