import { useStaticQuery, graphql } from 'gatsby';
import { SanityImageDataWithAlt } from '@web/shared/types';

export const useSEOConfig = (): SEOConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanitySeoConfig } = useStaticQuery(graphql`
        query SEOConfigQuery {
            sanitySeoConfig(_id: { eq: "seoConfig" }) {
                fallbackPageMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
                fallbackPostMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
                fallbackSeasonMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
                fallbackShowMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
            }
        }
    `);

    return sanitySeoConfig;
};

export interface SEOConfig {
    fallbackPageMetaImage: SanityImageDataWithAlt;
    fallbackPostMetaImage: SanityImageDataWithAlt;
    fallbackSeasonMetaImage: SanityImageDataWithAlt;
    fallbackShowMetaImage: SanityImageDataWithAlt;
}
