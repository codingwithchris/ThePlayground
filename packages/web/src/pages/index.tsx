import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';

import { useConfigContext } from '@web/shared/context';

import { Divider } from '@web/ui/core';
import { NewsSubscribeCTA } from '@web/ui/molecules';

import PageTemplate from '@web/domains/page/__template__';

import {
    ArchiveSection,
    HeroSection,
    LongDescriptionSection,
    RebrandSection,
    TempSeasonListSection,
} from '@web/domains/page/home';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityHomePage: page } = data;

    /**
     * TODO: Extract this hero action resolver logic into a re-usable set of functions, removing it from this component scope.
     */
    const { links } = useConfigContext();
    const heroActionType = page.hero.action.link._type;
    const getHeroActionPath = (type: 'show' | 'season' | 'post') => {
        switch (type) {
            case 'show':
                return links.getShow(
                    page.hero.action.link.season?.slug?.current,
                    page.hero.action.link.slug?.current
                );
                break;
            case 'season':
                return links.getSeason(page.hero.action.link.slug?.current);
                break;

            case 'post':
                return links.getPost(page.hero.action.link.slug?.current);
                break;

            default:
                return page.hero.action.link.slug?.current;
                break;
        }
    };

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <HeroSection
                title={page.hero.title}
                copy={page.hero.copy}
                action={{
                    link: getHeroActionPath(heroActionType),
                    text: page.hero.action.text,
                }}
                bgImage={{
                    image: page.hero.image.asset,
                }}
            />
            <RebrandSection />
            <LongDescriptionSection />
            <Divider color="paperLight" />
            <TempSeasonListSection
                tempBurningBoyImage={page.tempBurningBoyImage}
                tempFriendArtImage={page.tempFriendArtImage}
                tempPuffsImage={page.tempPuffsImage}
                auditionLink={page.hero.action.link.slug.current}
            />
            <Divider color="paperLight" />
            <ArchiveSection />
            <NewsSubscribeCTA />
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        sanityHomePage {
            title
            slug {
                current
            }
            _updatedAt
            seo {
                title
                description
                hide
                publishedAt
                image {
                    alt
                    asset {
                        url
                    }
                }
            }

            hero {
                title
                copy
                action {
                    text
                    # We need to make sure this link is set up to work with any allowed data source
                    link {
                        ... on SanityPost {
                            _type
                            slug {
                                current
                            }
                        }
                        ... on SanitySeason {
                            _type
                            slug {
                                current
                            }
                        }
                        # If we are querying a show, we also want to query the season so we can build dynamic links
                        ... on SanityShow {
                            _type
                            slug {
                                current
                            }
                            season {
                                slug {
                                    current
                                }
                            }
                        }
                    }
                }
                image {
                    asset {
                        gatsbyImageData(
                            placeholder: BLURRED
                            layout: FULL_WIDTH
                        )
                    }
                }
            }

            # Temp Data for season announcement
            tempBurningBoyImage {
                alt
                asset {
                    gatsbyImageData(
                        placeholder: BLURRED
                        layout: FULL_WIDTH
                        width: 500
                    )
                }
            }

            tempFriendArtImage {
                alt
                asset {
                    gatsbyImageData(
                        placeholder: BLURRED
                        layout: FULL_WIDTH
                        width: 500
                    )
                }
            }

            tempPuffsImage {
                alt
                asset {
                    gatsbyImageData(
                        placeholder: BLURRED
                        layout: FULL_WIDTH
                        width: 500
                    )
                }
            }
        }
    }
`;

interface PageData {
    sanityHomePage: HomePageData;
}

interface HomePageData extends SanityDocument {
    hero: {
        title: string;
        copy: string;
        action: {
            text: string;
            link: {
                _type: 'season' | 'show' | 'post';
                slug: {
                    current: string;
                };
                season?: {
                    slug: {
                        current: string;
                    };
                };
            };
        };
        image: SanityImageData;
    };
    tempBurningBoyImage: SanityImageDataWithAlt;
    tempFriendArtImage: SanityImageDataWithAlt;
    tempPuffsImage: SanityImageDataWithAlt;
}

export default HomePage;
