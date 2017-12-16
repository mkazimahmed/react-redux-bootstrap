import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

import {
    defineMessages,
    injectIntl,
    intlShape,
    FormattedMessage,
} from 'react-intl';

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

const FixedMenu = ({
    intl,
    inverted = false,
    pointing = false,
    secondary = false,
    size = 'large',
}) => {
    const { formatMessage } = intl;

    return (
        <Menu
            fixed="top"
            inverted={inverted}
            pointing={pointing}
            secondary={secondary}
            size={size}
        >
            <Container>
                <Menu.Item as="a" to="/" active>
                    {formatMessage(messages.home)}
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">
                    {formatMessage(messages.contact)}
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item className="item">
                        <Button as="a">Log in</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button as="a" primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
};

export default injectIntl(FixedMenu);
