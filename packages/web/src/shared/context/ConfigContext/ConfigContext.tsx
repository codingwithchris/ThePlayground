import React, { createContext, useContext } from 'react';

import { CompanyConfig, useCompanyConfig } from './configs/useCompanyConfig';
import { SiteConfig, useSiteConfig } from './configs/useSiteConfig';
import { SEOConfig, useSEOConfig } from './configs/useSEOConfig';
import {
    LinkManifestConfig,
    useLinkManifestConfig,
} from './configs/useLinkManifestConfig';

export const ConfigContext = createContext({} as GlobalConfigs);

export const ConfigProvider: React.FC = ({ children }) => {
    const company = useCompanyConfig();
    const site = useSiteConfig();
    const seo = useSEOConfig();
    const links = useLinkManifestConfig();

    return (
        <ConfigContext.Provider value={{ company, site, seo, links }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfigContext = (): GlobalConfigs => useContext(ConfigContext);

export interface GlobalConfigs {
    company: CompanyConfig;
    site: SiteConfig;
    seo: SEOConfig;
    links: LinkManifestConfig;
}
