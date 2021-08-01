import React from 'react';
import { graphql, PageProps } from 'gatsby';

import {
    useConfigContext,
    useGlobalPerformanceContext,
} from '@web/shared/context';
import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';
import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';

import { NewsSubscribeCTA } from '@web/ui/molecules';

import { SingleSeasonProvider } from '../../season/__context__';
import { SingleShowProvider } from '../__context__';
import { ShowPageProps, ShowPageGatsbyContext } from './types';

import { Hero, ActionBar, Performances } from './components';

const SingleShowLanding: React.FC<PageProps<PageData, ShowPageGatsbyContext>> =
    ({ data, pageContext, location }) => {
        const { sanityShow: show } = data;
        const { slug, seasonSlug, seasonURL } = pageContext;

        const url = useCurrentURL(location.pathname);
        const metaImage = useGetMetaImage('show', show.seo.image);

        return (
            <SingleSeasonProvider slug={seasonSlug}>
                <SingleShowProvider slug={slug}>
                    <PageBasicSEO
                        url={url}
                        title={show.seo.title}
                        description={show.seo.description}
                        image={metaImage}
                        hideSEO={show.seo.hide}
                    />
                    {/* Do not output structured data if this page will be hidden from SEO */}
                    {show.seo.hide ? null : (
                        <StructuredData
                            pageSchemaData={{
                                pageURL: url,
                                title: show.seo.title,
                                description: show.seo.description,
                                image: metaImage,
                                datePublished: show.seo.publishedAt,
                                dateModified: show._updatedAt,
                            }}
                        />
                    )}
                    <Hero
                        bgImage={{ image: show.heroImage.asset }}
                        actionBar={<ActionBar url={url} />}
                    />
                    <Performances performances={show.performances} />
                    <NewsSubscribeCTA />
                </SingleShowProvider>
            </SingleSeasonProvider>
        );
    };

export const showQuery = graphql`
    query showData($id: String!) {
        sanityShow(_id: { eq: $id }) {
            # Toggles
            # toggles {
            #     isCollaboration
            # }

            # # Selectors
            # selectors {
            #     type
            #     status
            # }

            # # Core Info
            heroImage {
                asset {
                    _id
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        width: 1600
                        placeholder: BLURRED
                    )
                }
            }
            title
            author {
                name
                bioLink
                scriptLink
            }
            openDate
            closeDate

            # Location Information
            # location {
            #     googleTitle
            #     address {
            #         city
            #         state
            #         stateCode
            #         street
            #         zipcode
            #     }
            #     Geolocation {
            #         lat
            #         lng
            #     }
            #     _rawDirections(resolveReferences: { maxDepth: 10 })
            #     _rawParking(resolveReferences: { maxDepth: 10 })
            # }

            # Addition Performance Details
            # rating
            # runtimeHours
            # runtimeMinutes
            # intermissionCount

            # contentAdvisory {
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            #     copy
            #     hasModal
            # }

            # effectsAdvisory {
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            #     copy
            #     hasModal
            # }

            # additionalDetails {
            #     title
            #     copy
            #     icon
            #     hasModal
            #     modalTriggerText
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            # }

            ## Performances & Tickets
            performances {
                datetime
                hasTalkback
                isPayWhatYouCan
                isPreview
                status
            }

            ## SEO Settings
            _createdAt
            _updatedAt
            seo {
                title
                hide
                description
                image {
                    alt
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
    sanityShow: ShowPageProps;
}

export default SingleShowLanding;
