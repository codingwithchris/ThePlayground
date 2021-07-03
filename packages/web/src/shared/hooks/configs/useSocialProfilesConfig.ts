import { AvailableIconName } from '@web/ui/core';
import { useConfigContext } from '@web/shared/context';

export const useSocialProfilesConfig = (): SocialProfilesConfig[] => {
    const { company } = useConfigContext();

    return [
        {
            name: 'facebook',
            link: company.facebook,
            iconName: 'Facebook',
        },
        {
            name: 'instagram',
            link: company.instagram,
            iconName: 'Instagram',
        },
        {
            name: 'twitter',
            link: company.twitter,
            iconName: 'TwitterAlt',
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

interface SocialProfilesConfig {
    name: string;
    link: string;
    iconName: AvailableIconName;
}
