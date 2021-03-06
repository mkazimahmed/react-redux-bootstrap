'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

require('./home.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact(_ref) {
    var intl = _ref.intl;
    var formatMessage = intl.formatMessage;

    return _react2.default.createElement(
        'h1',
        { className: 'main-menu' },
        _react2.default.createElement(_reactIntl.FormattedMessage, {
            id: 'contact-us',
            defaultMessage: 'Contact Us'
        })
    );
};
exports.default = (0, _reactIntl.injectIntl)(Contact);