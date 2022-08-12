import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyPageContext, SanityDocument } from '@web/shared/types';

import { Divider } from '@web/ui/core';

import PageTemplate from '@web/domains/page/__template__';

import { ArchiveSection, GoodbyeFarewellAmen } from '@web/domains/page/home';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    // pageContext,
    location,
}) => {
    const { sanityHomePage: page } = data;

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <GoodbyeFarewellAmen />
            <Divider color="paperLight" />
            <ArchiveSection />
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
        }
    }
`;

interface PageData {
    sanityHomePage: HomePageData;
}

type HomePageData = SanityDocument;

export default HomePage;
