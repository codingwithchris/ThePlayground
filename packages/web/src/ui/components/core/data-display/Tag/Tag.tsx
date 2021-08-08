import React from 'react';

import { BodyText } from '@web/ui/core';

import { TagProps } from './Tag.types';
import * as styled from './Tag.styles';

export const Tag = ({ text, media, size = 'm' }: TagProps) => {
    return (
        <styled.Tag size={size}>
            {media && <div className="media">{media}</div>}
            <BodyText size="s">{text}</BodyText>
        </styled.Tag>
    );
};
