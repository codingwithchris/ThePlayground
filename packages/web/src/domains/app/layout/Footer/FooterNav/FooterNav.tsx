import * as React from 'react';

import { useConfigContext } from '@web/shared/context';
import { useSocialProfiles } from '@web/shared/hooks';

import { Link } from '@web/domains/app/routing';
import { BodyText, Icon, Logo } from '@web/ui/core';

import * as styled from './__styles';

export const FooterNav = (): JSX.Element => {
    const { links } = useConfigContext();
    const socialAccounts = useSocialProfiles();
    const activeClass = '--is-active';

    const menuItems = [
        {
            text: 'the archive',
            link: links.archivePage,
        },
        {
            text: 'our rebrand',
            link: links.getPost('the-playground-theatre-is-now-the-nerve'),
        },
        {
            text: 'our wsywat response',
            link: links.getPost('our-wsywat-response-plan'),
        },
    ];

    return (
        <styled.FooterNav aria-labelledby="footermenulabel">
            <p id="footermenulabel" className="u-visually-hidden">
                Footer Navigation
            </p>

            <div className="brand">
                <Link to="/" activeClassName="--is-active">
                    <Logo type="BrandMark" size="xs" color="light" />
                </Link>
            </div>

            <div className="menus">
                <div className="menu explore">
                    <BodyText
                        size="m"
                        weight="bold"
                        color="light"
                        className="menu-title"
                    >
                        explore
                    </BodyText>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                {item.link && (
                                    <Link
                                        to={item.link}
                                        activeClassName={activeClass}
                                    >
                                        <BodyText
                                            size="s"
                                            color="medium"
                                            weight="bold"
                                        >
                                            {item.text}
                                        </BodyText>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="menu social">
                    <BodyText
                        size="m"
                        weight="bold"
                        color="light"
                        className="menu-title"
                    >
                        follow us
                    </BodyText>
                    <ul>
                        {socialAccounts.map((account) => (
                            <li key={account.name}>
                                <Link
                                    to={account.link}
                                    activeClassName={activeClass}
                                >
                                    <Icon
                                        name={account.iconName}
                                        size="m"
                                        color="medium"
                                        title={`${account.name} icon`}
                                    />

                                    <BodyText
                                        size="s"
                                        color="medium"
                                        weight="bold"
                                    >
                                        {account.name}
                                    </BodyText>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </styled.FooterNav>
    );
};
