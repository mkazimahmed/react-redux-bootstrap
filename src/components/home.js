// @flow
import React from 'react';

import {
    defineMessages,
    injectIntl,
    intlShape,
    FormattedMessage,
} from 'react-intl';

import './home.scss';

const messages = defineMessages({
    file: {
        id: 'file',
        defaultMessage: 'Many Files',
        description: 'The file menu item',
    },
    edit: {
        id: 'edit',
        defaultMessage: 'Edit',
        description: 'The edit menu item',
    },
    help: {
        id: 'help',
        defaultMessage: 'Help',
        description: 'The help menu item',
    },
    contact: {
        id: 'contact',
        defaultMessage: 'Contact us',
        description: 'The cotact menu item',
    },
});

const Home = ({ intl }) => {
    const { formatMessage } = intl;
    return (
        <div className="main-menu">
            <FormattedMessage
                id="helloWorld"
                defaultMessage="Hello Kazim!"
                description="greeting message"
            />
            <h1>{formatMessage(messages.file)}</h1>
            <h1>{formatMessage(messages.contact)}</h1>
        </div>
    );
};

export default injectIntl(Home);
