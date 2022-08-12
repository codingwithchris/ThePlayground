import { AvailableIconName } from '@web/ui/core';
import { useConfigContext } from '@web/shared/context';

export const useSocialProfiles = (): SocialProfile[] => {
    const { company } = useConfigContext();

    return [
        {
            name: 'instagram',
            link: company.instagram,
            iconName: 'Instagram',
        },
        {
            name: 'spotify',
            link: company.spotify,
            iconName: 'Spotify',
        },
        {
            name: 'youtube',
            link: company.youtube,
            iconName: 'Youtube',
        },
        {
            name: 'github',
            link: company.github,
            iconName: 'Github',
        },
    ];
};

interface SocialProfile {
    name: string;
    link: string;
    iconName: AvailableIconName;
}
