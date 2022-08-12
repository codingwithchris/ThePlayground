import React from 'react';

import { useConfigContext } from '@web/shared/context';
import { OutlineButton } from '@web/ui/core';

import * as styled from './__styles';

export const DesktopNavigation: React.FC = () => {
    const {
        links: { archivePage },
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
                <li className="highlight">
                    <OutlineButton
                        size="s"
                        color="tertiary"
                        to={archivePage}
                        key="support us"
                        className="button"
                        animateOnClick
                    >
                        the archives
                    </OutlineButton>
                </li>
            </ul>
        </styled.DesktopNavigation>
    );
};
