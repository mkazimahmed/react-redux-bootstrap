// @flow
import React from 'react';

import {
    defineMessages,
    injectIntl,
    intlShape,
    FormattedMessage,
} from 'react-intl';

import './home.scss';

type Props = {
    intl: any,
}

const Contact = ({ intl } : Props) => {
    const { formatMessage } = intl;
    return (
        <h1 className="main-menu">
            <FormattedMessage
                id="contact-us"
                defaultMessage="Contact Us"
                description="greeting message"
            />
        </h1>
    );
};

export default injectIntl(Contact);
