'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

require('./home.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = (0, _reactIntl.defineMessages)({
    file: {
        'id': 'file',
        'defaultMessage': 'Many Files'
    },
    edit: {
        'id': 'edit',
        'defaultMessage': 'Edit'
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


var Home = function Home(_ref) {
    var intl = _ref.intl;
    var formatMessage = intl.formatMessage;

    return _react2.default.createElement(
        'div',
        { className: 'main-menu' },
        _react2.default.createElement(_reactIntl.FormattedMessage, {
            id: 'helloWorld',
            defaultMessage: 'Hello Kazim!'
        }),
        _react2.default.createElement(
            'h1',
            null,
            formatMessage(messages.file)
        ),
        _react2.default.createElement(
            'h1',
            null,
            formatMessage(messages.contact)
        )
    );
};

exports.default = (0, _reactIntl.injectIntl)(Home);