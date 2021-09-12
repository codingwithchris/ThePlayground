import React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
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
    SeasonOverviewSection,
} from '@web/domains/page/home';

import { SeasonWithShows } from '@web/domains/performance/shared';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    // pageContext,
    location,
}) => {
    const { sanityHomePage: page, sanityLinkManifestConfig } = data;

    const { featuredSeason } = sanityLinkManifestConfig;

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
                    page.hero.action.link.slug.current
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
            <SeasonOverviewSection season={featuredSeason} />
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
        }
        # TODO: This data needs to get moved off of sanityLinkManifestConfig to a more sensibly named configs for seasons/shows
        sanityLinkManifestConfig(
            featuredSeason: {
                shows: {
                    elemMatch: {
                        toggles: { isHiddenFromWebsite: { eq: false } }
                    }
                }
            }
        ) {
            featuredSeason {
                title
                tagline
                description
                shows {
                    title
                    slug {
                        current
                    }
                    teaser
                    rating
                    series {
                        identifier
                        title
                    }
                    author {
                        name
                    }
                    closeDate
                    openDate
                    performances {
                        isPWYW
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
                }
            }
        }
    }
`;

interface PageData {
    sanityHomePage: HomePageData;
    sanityLinkManifestConfig: {
        featuredSeason: SeasonWithShows;
    };
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
}

export default HomePage;
