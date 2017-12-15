import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        defaultMessage: 'File',
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
        defaultMessage: 'Contact',
        description: 'The cotact menu item',
    },
});

export class Home extends Component {
    static propTypes = {
        intl: intlShape,
        className: PropTypes.string,
        onSelect: PropTypes.func,
    };

    onSelectHandler = e => {
        const { onSelect } = this.props;

        if (onSelect) {
            onSelect(e);
        }
    };

    render() {
        const { formatMessage } = this.props.intl;

        return (
            <div className='main-menu'>
                <FormattedMessage
                    id='helloWorld'
                    defaultMessage='Hello Kazim!'
                    description='greeting message'
                />
                <h1>{formatMessage(messages.file)}</h1>
                <h1>{formatMessage(messages.contact)}</h1>
            </div>
        );
    }
}

export default injectIntl(Home);