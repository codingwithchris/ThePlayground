import { AvailableIconName } from '@web/ui/core';
import { useConfigContext } from '@web/shared/context';

export const useSocialShare = (
    shareURL: string,
    shareText: string
): SocialShare[] => {
    const { company, site } = useConfigContext();
    const encodedURL = encodeURIComponent(shareURL);
    const text = encodeURIComponent(shareText);

    return [
        {
            text: 'Share on Facebook',
            url: `https://www.facebook.com/dialog/share?app_id=${site.facebookAppID}&display=popup&href=${encodedURL}&quote=${text}`,
            iconName: 'FacebookAlt',
        },
        {
            text: 'Share on Twitter',
            url: `https://twitter.com/intent/tweet?text=${text}&url=${encodedURL}&via=${company.twitterUsername}`,
            iconName: 'TwitterAlt',
        },
        {
            text: 'Share on LinkedIn',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
            iconName: 'LinkedInAlt',
        },
        {
            text: 'Share via Email',
            url: `mailto:yourcoolfriend@theiremail.com?subject=${text}&body=${encodedURL}`,
            iconName: 'Envelope',
        },
    ];
};

interface SocialShare {
    text: string;
    url: string;
    iconName: AvailableIconName;
}
