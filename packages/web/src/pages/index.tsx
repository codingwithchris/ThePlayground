import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';

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

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <HeroSection
                title={page.hero.title}
                copy={page.hero.copy}
                rebrandLink={page.hero.action.link.slug.current}
                rebrandLinkText={page.hero.action.text}
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
                    link {
                        ... on SanityPost {
                            slug {
                                current
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
                slug: {
                    current: string;
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
