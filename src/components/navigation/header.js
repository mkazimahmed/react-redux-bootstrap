import React from 'react';
import { Link } from 'react-router-dom';

import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
    home: {
        id: 'home',
        defaultMessage: 'Home',
        description: 'The home menu item',
    },
    dashboard: {
        id: 'dashboard',
        defaultMessage: 'Dashboard',
        description: 'The Dashboard menu item',
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

const Header = ({ intl }) => {
    const { formatMessage } = intl;
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">{formatMessage(messages.home)}</Link></li>
                    <li>
                        <Link to="/dashboard">{formatMessage(messages.dashboard)}</Link>
                    </li>
                    <li><Link to="/contact">{formatMessage(messages.contact)}</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default injectIntl(Header);
