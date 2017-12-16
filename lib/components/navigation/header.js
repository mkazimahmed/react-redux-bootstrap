'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = (0, _reactIntl.defineMessages)({
    home: {
        'id': 'home',
        'defaultMessage': 'Home'
    },
    dashboard: {
        'id': 'dashboard',
        'defaultMessage': 'Dashboard'
    },
    help: {
        'id': 'help',
        'defaultMessage': 'Help'
    },
    contact: {
        'id': 'contact',
        'defaultMessage': 'Contact us'
    }
});

var Header = function Header(_ref) {
    var intl = _ref.intl;
    var formatMessage = intl.formatMessage;

    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        formatMessage(messages.home)
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/dashboard' },
                        formatMessage(messages.dashboard)
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/contact' },
                        formatMessage(messages.contact)
                    )
                )
            )
        )
    );
};

exports.default = (0, _reactIntl.injectIntl)(Header);