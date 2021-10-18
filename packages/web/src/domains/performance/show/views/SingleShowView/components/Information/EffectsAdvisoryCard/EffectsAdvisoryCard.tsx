import React from 'react';
import { BodyText, Tag, Icon } from '@web/ui/core';

import { ShowDetail } from '../../../../../types';
import * as styled from './EffectsAdvisoryCard.styles';

export const EffectsAdvisoryCard = ({
    copy,
    hasModal,
    modalTriggerText,
    _rawModalContent,
    className,
}: EffectsAdvisoryCardProps) => {
    return (
        <styled.EffectsAdvisoryCard bgColor="paper" className={className}>
            <Tag
                text="effects advisory"
                media={<Icon name="Radiation" color="accent" size="xs" />}
                bgColor="paperLight"
                borderColor="paperLight"
                color="light"
                textWeight="bold"
                size="s"
            />
            <BodyText color="medium" size="s" as="p" className="copy">
                This show contains {copy}
            </BodyText>
        </styled.EffectsAdvisoryCard>
    );
};

interface EffectsAdvisoryCardProps extends ShowDetail {
    className?: string;
}
