import React from 'react';
import { BodyText, Tag } from '@web/ui/core';

import { SHOW_RATING } from '../../../../../constants';
import { ShowDetail } from '../../../../../types';
import * as styled from './ContentAdvisoryCard.styles';

export const ContentAdvisoryCard = ({
    rating,
    copy,
    hasModal,
    modalTriggerText,
    _rawModalContent,
    className,
}: ContentAdvisoryCardProps) => {
    return (
        <styled.ContentAdvisoryCard bgColor="paper" className={className}>
            <div className="rating-group">
                <BodyText
                    size="s"
                    color="light"
                    weight="bold"
                    className="prefix"
                >
                    Rated
                </BodyText>
                <Tag
                    text={rating.toUpperCase()}
                    bgColor="paperLight"
                    borderColor="paperLight"
                    color="light"
                    textWeight="bold"
                    size="s"
                    className="rating"
                />
                {copy && (
                    <BodyText size="s" color="medium" className="rating-reason">
                        for {copy}
                    </BodyText>
                )}
            </div>
        </styled.ContentAdvisoryCard>
    );
};

interface ContentAdvisoryCardProps extends ShowDetail {
    className?: string;
    rating: SHOW_RATING;
}
