import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';

// import { SubscribeSection } from '@web/ui/molecules';
import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';
import { LegacyContentNotice } from '@web/ui/molecules';

import { SeasonPage, SeasonPageContext } from '../types';
import { SingleSeasonProvider } from '../__context__';

const SeasonLanding: React.FC<PageProps<PageData, SeasonPageContext>> = ({
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
            <LegacyContentNotice
                contentType="season"
                title={`${season.title} Season`}
                subTitle={season.tagline}
                legacyURL={`https://theplaygroundtheatre.org/season/${slug}`}
                legacyURLText="See season on old website"
            />
            {/* <SubscribeSection /> */}
        </SingleSeasonProvider>
    );
};

export const seasonQuery = graphql`
    query seasonData($id: String!) {
        sanitySeason(_id: { eq: $id }) {
            _updatedAt
            title
            slug {
                current
            }
            tagline
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
    sanitySeason: SeasonPage;
}

export default SeasonLanding;
