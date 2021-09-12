import React from 'react';
import { merge } from 'lodash';
import BasePortableText from '@sanity/block-content-to-react';

import { BodyText } from '../../../data-display/BodyText/BodyText';
import { Heading } from '../../../data-display/Heading/Heading';
import { GrittyHeading } from '../../../data-display/GrittyHeading/GrittyHeading';
import { PortableTextComponentConfig } from '../types';

/**
 * Configure all props for default block elements here
 */
const defaultConfig: Required<PortableTextComponentConfig['block']> = {
    bodyText: {
        size: 'm',
        color: 'light',
        className: 'p',
    },
};

/**
 * Handles rendering anything within 'types.block'
 *
 * TODO: Improve Types based on what we expect from Sanity
 */
export const defaultBlockWithConfig =
    (config?: PortableTextComponentConfig['block']) => (props: any) => {
        const { node, children } = props;
        const { style, _key } = node; // eslint-disable-line @typescript-eslint/naming-convention

        const _config = merge(defaultConfig, config);

        if (style === 'normal') {
            return (
                <BodyText key={_key} {..._config.bodyText}>
                    {children}
                </BodyText>
            );
        }
        if (style === 'h2') {
            return (
                <GrittyHeading
                    size="xs"
                    as="h2"
                    key={_key}
                    color="dark"
                    bgColor="neutralLight"
                    offset={-1}
                    className="h2"
                >
                    {children}
                </GrittyHeading>
            );
        }
        if (style === 'h3') {
            return (
                <Heading
                    size="xs"
                    as="h3"
                    key={_key}
                    color="light"
                    className="h3"
                >
                    {children}
                </Heading>
            );
        }

        // Fall back to default handling
        return BasePortableText.defaultSerializers.types.block(props);
    };
