'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _dashboard = require('./dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _contact = require('./contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
    return _react2.default.createElement(
        'main',
        null,
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _dashboard2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _contact2.default })
        )
    );
};

exports.default = Main;