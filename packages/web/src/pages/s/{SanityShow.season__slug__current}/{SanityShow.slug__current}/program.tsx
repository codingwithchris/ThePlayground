import React, { useRef } from 'react';
import { graphql, PageProps } from 'gatsby';

import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';
import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';

import { Divider } from '@web/ui/core';
import { NewsSubscribeCTA } from '@web/ui/molecules';

import {
    getTotalPerformanceCount,
    getTotalTicketedPerformanceCount,
    getTotalPWYWPerformanceCount,
    hasRemainingPerformances,
    SingleShowProvider,
} from '@web/domains/performance/show';

import {
    ShowPageProps,
    ShowPageGatsbyContext,
} from '@web/domains/performance/show/views';

import { SingleSeasonProvider } from '@web/domains/performance/season';

const SingleShowDigitalProgram: React.FC<
    PageProps<PageData, ShowPageGatsbyContext>
> = ({ data, pageContext, location }) => {
    // the gatsby API context automatically populates these variables names. That's why they are ugly
    const { season__slug__current: seasonSlug, slug__current: slug } =
        pageContext;

    return (
        <SingleSeasonProvider slug={seasonSlug}>
            <SingleShowProvider slug={slug}>
                <div>This is a program</div>
                {/* Program nav */}
                {/* Title and welcome message */}
                {/* Directors, Actors, Designers, Crew */}
                {/* Instagram + hashtag */}
                {/* Tell you friends */}
                {/* Support us */}
                {/* Soundtrack */}
                {/* Trailer */}
                <NewsSubscribeCTA />
            </SingleShowProvider>
        </SingleSeasonProvider>
    );
};

export const showQuery = graphql`
    query showProgramData($id: String) {
        sanityShow(id: { eq: $id }) {
            title
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

export default SingleShowDigitalProgram;
