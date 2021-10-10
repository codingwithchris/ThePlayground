import React, { useRef } from 'react';
import { graphql, PageProps } from 'gatsby';

import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';
import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';

import { NewsSubscribeCTA } from '@web/ui/molecules';

import { SingleShowProvider } from '@web/domains/performance/show';

import {
    DigitalProgramPageProps,
    DigitalProgramGatsbyContext,
    DigitalProgramView,
} from '@web/domains/performance/show/views';

import { SingleSeasonProvider } from '@web/domains/performance/season';

const SingleShowDigitalProgram: React.FC<
    PageProps<PageData, DigitalProgramGatsbyContext>
> = ({ data, pageContext, location }) => {
    const { sanityShow: show } = data;

    // the gatsby API context automatically populates these variables names. That's why they are ugly
    const { season__slug__current: seasonSlug, slug__current: slug } =
        pageContext;

    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('show', show.seo.image);

    const metaTitle = `Digital Program » ${show.title} | The Nerve`;
    const metaDescription = `Saving trees is rad. All of our programs are now digital. We hope you enjoy ${show.title}.`;

    return (
        <SingleSeasonProvider slug={seasonSlug}>
            <SingleShowProvider slug={slug}>
                <PageBasicSEO
                    url={url}
                    title={metaTitle}
                    description={metaDescription}
                    image={metaImage}
                    hideSEO={show.seo.hide}
                />
                {/* Do not output structured data if this page will be hidden from SEO */}
                {show.seo.hide ? null : (
                    <StructuredData
                        pageSchemaData={{
                            pageURL: url,
                            title: metaTitle,
                            description: metaDescription,
                            image: metaImage,
                            datePublished: show.seo.publishedAt,
                            dateModified: show._updatedAt,
                        }}
                    />
                )}
                <DigitalProgramView
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
    query showProgramData($id: String) {
        sanityShow(id: { eq: $id }) {
            title
            author {
                name
            }

            _rawDirectorsNote(resolveReferences: { maxDepth: 10 })

            # Warnings & Advisories
            triggerWarning
            contentAdvisory {
                copy
            }
            rating

            # Additional Performance Information
            runtimeHours
            runtimeMinutes
            intermissionCount

            # Series Information
            series {
                title
                identifier
                description
            }

            # Get all artist info for the show
            artists {
                directors {
                    role
                    group
                    bio {
                        _rawChildren(resolveReferences: { maxDepth: 10 })
                    }
                    artist {
                        firstName
                        lastName
                        middleName
                        pronouns
                        website
                        instagram
                        headshot {
                            alt
                            asset {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    fit: FILLMAX
                                    width: 100
                                )
                            }
                        }
                    }
                }
                actors {
                    role
                    group
                    bio {
                        _rawChildren(resolveReferences: { maxDepth: 10 })
                    }
                    artist {
                        firstName
                        lastName
                        middleName
                        pronouns
                        website
                        instagram
                        headshot {
                            alt
                            asset {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    fit: FILLMAX
                                    width: 100
                                )
                            }
                        }
                    }
                }
                designers {
                    role
                    group
                    bio {
                        _rawChildren(resolveReferences: { maxDepth: 10 })
                    }
                    artist {
                        firstName
                        lastName
                        middleName
                        pronouns
                        website
                        instagram
                        headshot {
                            alt
                            asset {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    fit: FILLMAX
                                    width: 100
                                )
                            }
                        }
                    }
                }
                crewMembers {
                    role
                    group
                    bio {
                        _rawChildren(resolveReferences: { maxDepth: 10 })
                    }
                    artist {
                        firstName
                        lastName
                        middleName
                        pronouns
                        website
                        instagram
                        headshot {
                            alt
                            asset {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    fit: FILLMAX
                                    width: 100
                                )
                            }
                        }
                    }
                }
                shadows {
                    role
                    group
                    bio {
                        _rawChildren(resolveReferences: { maxDepth: 10 })
                    }
                    artist {
                        firstName
                        lastName
                        middleName
                        pronouns
                        website
                        instagram
                        headshot {
                            alt
                            asset {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    fit: FILLMAX
                                    width: 100
                                )
                            }
                        }
                    }
                }
            }

            ## SEO Settings
            _createdAt
            _updatedAt
            seo {
                hide
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
    sanityShow: DigitalProgramPageProps;
}

export default SingleShowDigitalProgram;
