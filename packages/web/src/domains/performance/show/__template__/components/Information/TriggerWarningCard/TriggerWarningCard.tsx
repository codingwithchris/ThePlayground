import React from 'react';
import { BodyText, Tag, Icon } from '@web/ui/core';

import * as styled from './TriggerWarningCard.styles';

export const TriggerWarningCard = ({
    triggerWarning,
    className,
}: TriggerWarningCardProps) => {
    return (
        <styled.TriggerWarningCard bgColor="paper" className={className}>
            <Tag
                media={<Icon name="Warning" color="accent" size="xs" />}
                text="Trigger Warning"
                size="xs"
                color="light"
                bgColor="paperLight"
                textWeight="bold"
                borderColor="paperLight"
            />
            <BodyText color="medium" size="s" as="p" className="copy">
                This play {triggerWarning}
            </BodyText>
        </styled.TriggerWarningCard>
    );
};

interface TriggerWarningCardProps {
    className?: string;
    triggerWarning: string;
}
