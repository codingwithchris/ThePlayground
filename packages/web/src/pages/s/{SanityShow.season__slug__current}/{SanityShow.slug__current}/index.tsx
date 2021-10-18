import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';
import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';

import { NewsSubscribeCTA } from '@web/ui/molecules';

import {
    SingleShowProvider,
    SingleShowView,
    ShowPageProps,
    ShowPageGatsbyContext,
} from '@web/domains/performance/show';

import { SingleSeasonProvider } from '@web/domains/performance/season';

const SingleShowLanding: React.FC<PageProps<PageData, ShowPageGatsbyContext>> =
    ({ data, pageContext, location }) => {
        const { sanityShow: show } = data;

        // the gatsby API context automatically populates these variables names. That's why they are ugly
        const { season__slug__current: seasonSlug, slug__current: slug } =
            pageContext;

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
                    <SingleShowView
                        show={show}
                        url={url}
                        slug={slug}
                        seasonSlug={seasonSlug}
                    />
                    <NewsSubscribeCTA />
                </SingleShowProvider>
            </SingleSeasonProvider>
        );
    };

export const showQuery = graphql`
    query showData($id: String) {
        sanityShow(id: { eq: $id }) {
            # Toggles
            # toggles {
            #     isCollaboration
            # }

            # # Selectors
            # selectors {
            #     type
            #     status
            # }

            # CORE SHOW INFO
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

            ## PERFORMANCE INFORMATION

            # Series Information
            series {
                title
                identifier
                description
            }

            # Location Information
            location {
                googleTitle
                title
                address {
                    city
                    state
                    stateCode
                    street
                    zipcode
                }
                geolocation {
                    lat
                    lng
                }
                # _rawDirections(resolveReferences: { maxDepth: 10 })
                # _rawParking(resolveReferences: { maxDepth: 10 })
            }

            # Ticket Provider Info
            generalTicketLink
            ticketProvider {
                url
                phone
                name
            }

            # Additional Performance Information
            runtimeHours
            runtimeMinutes
            intermissionCount

            # Content-related ratings & advisories
            rating
            triggerWarning
            contentAdvisory {
                _rawModalContent(resolveReferences: { maxDepth: 10 })
                copy
                hasModal
                modalTriggerText
            }

            effectsAdvisory {
                _rawModalContent(resolveReferences: { maxDepth: 10 })
                copy
                hasModal
                modalTriggerText
            }

            # additionalDetails {
            #     title
            #     copy
            #     icon
            #     hasModal
            #     modalTriggerText
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            # }

            # HEALTH & SAFETY NOTICE
            healthNotice {
                shouldDisplay
                title
                _rawContent(resolveReferences: { maxDepth: 10 })
            }

            ## PERFORMANCE AND TICKETS
            performances {
                datetime
                hasTalkback
                isPWYW
                isPreview
                status
                tickets {
                    type
                    price
                    externalLink
                }
            }

            ## MESSAGING
            _rawDescription(resolveReferences: { maxDepth: 10 })

            ## PROMO
            promo {
                trailer {
                    platform
                    videoID
                    credit {
                        title
                        website
                    }
                    creditRole
                }
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
