'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _semanticUiReact = require('semantic-ui-react');

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

var FixedMenu = function FixedMenu(_ref) {
    var intl = _ref.intl,
        _ref$inverted = _ref.inverted,
        inverted = _ref$inverted === undefined ? false : _ref$inverted,
        _ref$pointing = _ref.pointing,
        pointing = _ref$pointing === undefined ? false : _ref$pointing,
        _ref$secondary = _ref.secondary,
        secondary = _ref$secondary === undefined ? false : _ref$secondary,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'large' : _ref$size;
    var formatMessage = intl.formatMessage;


    return _react2.default.createElement(
        _semanticUiReact.Menu,
        {
            fixed: 'top',
            inverted: inverted,
            pointing: pointing,
            secondary: secondary,
            size: size
        },
        _react2.default.createElement(
            _semanticUiReact.Container,
            null,
            _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                { as: 'a', to: '/', active: true },
                formatMessage(messages.home)
            ),
            _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                { as: 'a' },
                'Work'
            ),
            _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                { as: 'a' },
                'Company'
            ),
            _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                { as: 'a' },
                formatMessage(messages.contact)
            ),
            _react2.default.createElement(
                _semanticUiReact.Menu.Menu,
                { position: 'right' },
                _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    { className: 'item' },
                    _react2.default.createElement(
                        _semanticUiReact.Button,
                        { as: 'a' },
                        'Log in'
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Menu.Item,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Button,
                        { as: 'a', primary: true },
                        'Sign Up'
                    )
                )
            )
        )
    );
};

exports.default = (0, _reactIntl.injectIntl)(FixedMenu);