import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';

// import { SubscribeSection } from '@web/ui/molecules';
import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';
import { NewsSubscribeCTA, SimpleHero } from '@web/ui/molecules';

import { SeasonPageProps, SeasonPageGatsbyContext } from './types';
import { SingleSeasonProvider } from '../__context__';
import { hasShowsInSeason } from '../__lib__';

import {
    ComingSoon,
    Hero,
    ShowsThisSeason,
    NeighboringSeasons,
} from './components';

const SeasonLanding: React.FC<PageProps<PageData, SeasonPageGatsbyContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanitySeason: season } = data;

    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', season.seo.image);
    const { slug } = pageContext;

    return (
        <SingleSeasonProvider slug={slug}>
            <PageBasicSEO
                url={url}
                title={season.seo.title}
                description={season.seo.description}
                image={metaImage}
                hideSEO={season.seo.hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {season.seo.hide ? null : (
                <StructuredData
                    pageSchemaData={{
                        pageURL: url,
                        title: season.seo.title,
                        description: season.seo.description,
                        image: metaImage,
                        datePublished: season.seo.publishedAt,
                        dateModified: season._updatedAt,
                    }}
                />
            )}
            <Hero title={season.title} tagline={season.tagline} />
            {hasShowsInSeason(season.shows) ? (
                <ShowsThisSeason>
                    {season.shows!.map((show) => (
                        <div>{show.title}</div>
                    ))}
                </ShowsThisSeason>
            ) : (
                <ComingSoon />
            )}

            <NeighboringSeasons />
            <NewsSubscribeCTA />
        </SingleSeasonProvider>
    );
};

export const seasonQuery = graphql`
    query seasonData($id: String!) {
        sanitySeason(_id: { eq: $id }) {
            ## Season Setup
            title
            slug {
                current
            }
            tagline

            # ShowsThisSeason this season
            shows {
                title
                cardImage {
                    asset {
                        gatsbyImageData
                    }
                }
                openDate
                closeDate
                author {
                    name
                }
                series {
                    title
                    identifier
                }
            }

            # SEO
            _updatedAt
            seo {
                title
                hide
                description
                image {
                    asset {
                        url
                    }
                }
                publishedAt
            }
        }
    }
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface PageData {
    sanitySeason: SeasonPageProps;
}

export default SeasonLanding;
