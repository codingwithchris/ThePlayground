import React from 'react';
import { Helmet } from 'react-helmet';

import { GlobalSEO } from '@web/domains/app/seo';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { StylesGlobal, FontDefinitions } from '../styles';

// CSS Reset
import '@web/assets/reset.css';

const PROGRAM_PATH_SLUG = 'program';

/**
 * Determine if we are on a digital program page.
 * TODO: Come up with a more global way to register & manage layouts and layout context across different pages/views
 */
const isProgram = (path: string) => {
    if (!path) {
        return false;
    }

    // Split into an array and remove empty strings resulting from trailing slashes
    const splitPathArray = path.split('/').filter((item) => item !== '');
    const lastPathItem = splitPathArray[splitPathArray.length - 1];

    if (!lastPathItem) {
        return false;
    }

    return lastPathItem === PROGRAM_PATH_SLUG;
};

export const Layout: React.FC = ({ children, ...props }) => {
    return (
        <>
            <GlobalSEO />

            <StylesGlobal />
            <Helmet>
                <style>{FontDefinitions}</style>
            </Helmet>
            {!isProgram(props.location?.pathname) && <Header />}
            <main>{children}</main>
            <Footer />
        </>
    );
};
