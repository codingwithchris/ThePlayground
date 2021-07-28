import React from 'react';

import { DividerProps } from './Divider.d';
import * as styled from './Divider.styles';

export const Divider: React.FC<DividerProps> = ({ color, className }) => (
    <styled.Divider color={color} className={className} aria-hidden="true" />
);
