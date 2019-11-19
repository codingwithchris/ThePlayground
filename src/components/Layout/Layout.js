import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Footer } from './Footer';
import { SEOGlobalMeta } from '../SEO';
import { StylesReset, StylesGlobal } from './Styles';
import { Cart } from '../Cart';

const Layout = ({ children, noHeader, noFooter }) => (
	<>
		<SEOGlobalMeta />
		<StylesReset />
		<StylesGlobal />

		{noHeader ? '' : <Header />}
		<main>{children}</main>
		{noFooter ? '' : <Footer />}

		<Cart />
	</>
);

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
	noHeader: PropTypes.bool,
	noFooter: PropTypes.bool,
};

Layout.defaultProps = {
	noHeader: false,
	noFooter: false,
};

export default Layout;
