import { defaultBlockWithConfig, Figure } from './typesComponents';
import { ExternalLink } from './marksComponents';
import { PortableTextComponentConfig } from './types';

export const serializers = (config?: PortableTextComponentConfig) => ({
    types: {
        block: defaultBlockWithConfig(config?.block),
        imageWithFullMeta: Figure,
        imageWithAlt: Figure,
    },
    marks: {
        externalLink: ExternalLink,
    },
});
