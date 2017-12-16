'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _reactIntl = require('react-intl');

var _localeData = require('locale-data');

var _localeData2 = _interopRequireDefault(_localeData);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_localeData2.default);

// Styles


// Locale related
var _I18N__ = __I18N__,
    locale = _I18N__.locale,
    messages = _I18N__.messages;


var App = function App() {
    return _react2.default.createElement(
        _reactIntl.IntlProvider,
        {
            locale: locale,
            messages: messages
        },
        _react2.default.createElement(
            'div',
            { className: 'mainApp' },
            _react2.default.createElement(_home2.default, null)
        )
    );
};

exports.default = App;