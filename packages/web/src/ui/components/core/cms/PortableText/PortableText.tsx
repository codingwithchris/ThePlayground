import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import { clientConfig } from '@web/shared/configs';
import { PortableTextComponentConfig } from './types';

import { serializers } from './serializers';

export const PortableText: React.FC<PortableTextProps> = ({
    config,
    content,
    className,
}) => {
    return (
        <BasePortableText
            blocks={content}
            serializers={serializers(config)}
            className={className}
            {...clientConfig.sanity}
        />
    );
};

interface PortableTextProps {
    config?: PortableTextComponentConfig;
    content: unknown[];
    className?: string;
}
