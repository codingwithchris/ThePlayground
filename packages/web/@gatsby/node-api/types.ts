interface NodeCreatePageConfig {
    id: string;
    slug: string;
    template: string;
    url: string;
}

export type SeasonPageConfig = NodeCreatePageConfig;

export interface ShowPageConfig extends NodeCreatePageConfig {
    season: SeasonPageConfig;
}

export type BlogPostConfig = NodeCreatePageConfig;

export interface SanityBlogPostData {
    allSanityPost: {
        nodes: {
            _id: string;
            slug: {
                current: string;
            };
        }[];
    };
}

export interface SanityBlogPageData {
    sanityLinkManifestConfig: {
        blogPage: {
            slug: {
                current: string;
            };
        };
    };
}

interface SanityShowData {
    toggles: {
        isHiddenFromWebsite: boolean;
    };
    _id: string;
    slug: {
        current: string;
    };
}

export interface SanitySeasonShowQueryData {
    allSanitySeason: {
        nodes: {
            _id: string;
            slug: {
                current: string;
            };
            shows: SanityShowData[];
        }[];
    };
}
