import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';

import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';
import { Divider } from '@web/ui/core';
import { ShowFeatureCard } from '@web/domains/performance/show';
import { NewsSubscribeCTA } from '@web/ui/molecules';

import {
    SeasonPageProps,
    SeasonPageGatsbyContext,
    ComingSoon,
    Description,
    Hero,
    ShowsThisSeason,
    NeighboringSeasons,
} from '@web/domains/performance/season/__template__';

import {
    SingleSeasonProvider,
    hasShowsInSeason,
} from '@web/domains/performance/season';

const SeasonLanding: React.FC<PageProps<PageData, SeasonPageGatsbyContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanitySeason: season } = data;

    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', season.seo.image);

    // the gatsby API context automatically populates these variables names. That's why they are ugly
    const { slug__current: slug } = pageContext;

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
            <Divider color="paper" />

            {season.description && (
                <>
                    <Description description={season.description} />
                    <Divider color="paper" />
                </>
            )}
            {hasShowsInSeason(season.shows) ? (
                <ShowsThisSeason>
                    {season.shows!.map(
                        ({ cardImage, slug: showSlug, ...show }) => (
                            <ShowFeatureCard
                                key={showSlug.current}
                                image={cardImage}
                                showSlug={showSlug.current}
                                {...show}
                            />
                        )
                    )}
                </ShowsThisSeason>
            ) : (
                <ComingSoon />
            )}
            <Divider color="paper" />
            <NeighboringSeasons />
            <NewsSubscribeCTA />
        </SingleSeasonProvider>
    );
};

export const seasonQuery = graphql`
    query seasonData($id: String) {
        sanitySeason(id: { eq: $id }) {
            ## Season Setup
            title
            slug {
                current
            }
            tagline
            description

            # Shows this season
            shows {
                title
                # TODO: Generate card images for each show and use cardImage for query
                cardImage {
                    asset {
                        gatsbyImageData(
                            width: 1200
                            placeholder: BLURRED
                            height: 900
                            fit: FILL
                        )
                    }
                    alt
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
                slug {
                    current
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
