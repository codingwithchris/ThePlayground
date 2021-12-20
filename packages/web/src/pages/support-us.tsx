import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
} from '@web/shared/types';

import { isSSR } from '@web/shared/utils';

import PageTemplate from '@web/domains/page/__template__';
import { Divider } from '@web/ui/core';
import { SimpleHero, NewsSubscribeCTA } from '@web/ui/molecules';

import {
    SellSection,
    AlternateGivingSection,
    DonateSection,
    TaxExemptSection,
} from '@web/domains/page/support-us';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanitySupportUsPage: page } = data;

    return (
        <>
            <Helmet>
                {!isSSR && (
                    <script
                        src="https://donorbox.org/widget.js"
                        paypalExpress="true"
                    />
                )}
            </Helmet>
            <PageTemplate
                seo={page.seo}
                lastUpdated={page._updatedAt}
                currentLocation={location.pathname}
            >
                <SimpleHero
                    title="Level Up"
                    subTitle="Support New Artistic Voices in Dayton"
                />
                <SellSection />
                <DonateSection />
                <Divider color="paperLight" />
                <AlternateGivingSection />
                <TaxExemptSection />
                <NewsSubscribeCTA />
            </PageTemplate>
        </>
    );
};

export const query = graphql`
    query {
        sanitySupportUsPage {
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
    sanitySupportUsPage: SupportUsPageData;
}

interface SupportUsPageData extends SanityDocument {
    test?: string;
}

export default HomePage;
