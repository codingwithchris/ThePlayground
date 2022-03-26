import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import { GatsbyPageContext, SanityDocument } from '@web/shared/types';

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

const ContactPage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityContactPage: page } = data;

    return (
        <>
            <PageTemplate
                seo={page.seo}
                lastUpdated={page._updatedAt}
                currentLocation={location.pathname}
            >
                <SimpleHero
                    title="Connect With Us"
                    subTitle="Support New Artistic Voices in Dayton"
                />
                <NewsSubscribeCTA />
            </PageTemplate>
        </>
    );
};

export const query = graphql`
    query {
        sanityContactPage {
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
    sanityContactPage: ContactPageData;
}

interface ContactPageData extends SanityDocument {
    test?: string;
}

export default ContactPage;
