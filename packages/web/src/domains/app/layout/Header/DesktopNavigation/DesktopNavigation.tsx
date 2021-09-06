import React from 'react';

import { useConfigContext } from '@web/shared/context';
import { BodyText, OutlineButton, Icon } from '@web/ui/core';

import { Link } from '@web/domains/app/routing';

import * as styled from './__styles';

const LinkItem: React.FC<{ slug: string; text: string }> = ({ slug, text }) => (
    <li>
        <Link to={slug} activeClassName="--is-active">
            <BodyText as="span" size="s" weight="bold" color="medium">
                {text}
            </BodyText>
        </Link>
    </li>
);

export const DesktopNavigation: React.FC = () => {
    const {
        links: { featuredSeason, archivePage, supportUsPage },
    } = useConfigContext();

    return (
        <styled.DesktopNavigation
            aria-labelledby="mainmenulabel"
            data-nav-scope="desktop"
        >
            <p id="mainmenulabel" className="u-visually-hidden">
                Main Menu
            </p>
            <ul>
                {/* {currentSeason && (
                    <LinkItem
                        slug={currentSeason}
                        text="current season"
                        key="currentSeason"
                    />
                )} */}

                {featuredSeason && (
                    <LinkItem
                        slug={featuredSeason}
                        text="this season"
                        key="season"
                    />
                )}

                <LinkItem
                    slug={archivePage!}
                    text="the archive"
                    key="archive"
                />

                {/* <LinkItem slug={about} text="about" key="about" />
                <LinkItem slug={contact} text="connect" key="connect" /> */}
                <li className="highlight">
                    <OutlineButton
                        size="s"
                        color="tertiary"
                        to={supportUsPage!}
                        key="support us"
                        className="button"
                        animateOnClick
                    >
                        support us
                    </OutlineButton>
                </li>
            </ul>
        </styled.DesktopNavigation>
    );
};
