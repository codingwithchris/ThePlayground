import React from 'react';
import { Helmet } from 'react-helmet';
import { useConfigContext } from '@web/shared/context';

/**
 * Handle generating the global basic meta information for the site.
 */
export const GlobalSEO: React.FC = () => {
    const { company } = useConfigContext();

    if (!company) {
        console.log(
            'Data could not be retrieved from `useConfigContext`. Global SEO not rendered.'
        );
        return null;
    }

    return (
        <Helmet>
            {/* Default language and direction */}
            <html lang="en" dir="ltr" />

            {/* Google Specific Tags -- prevent search box from showing up on Google */}
            <meta name="google" content="nositelinkssearchbox" />

            {/* Set geo location for business */}
            <meta name="geo.region" content={`US-${company.stateCode}`} />
            <meta name="geo.placename" content={company.city} />

            {/* Global OpenGraph meta */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:sitename" content={company.name} />
            <meta name="og:email" content={company.emailGeneral} />
            <meta name="og:country-name" content="USA" />
            <meta name="og:region" content={company.stateCode} />
        </Helmet>
    );
};
