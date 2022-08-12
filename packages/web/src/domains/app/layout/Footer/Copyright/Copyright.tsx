import React from 'react';

import { BodyText, Container } from '@web/ui/core';
import { useConfigContext } from '@web/shared/context';

import * as styled from './__styles';

export const Copyright: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { company } = useConfigContext();

    return (
        <styled.Copyright>
            <Container className="container">
                <BodyText size="s" color="medium">
                    &copy; {currentYear} {company.legalName} All rights
                    reserved.
                </BodyText>
            </Container>
        </styled.Copyright>
    );
};
