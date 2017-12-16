'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixedMenu = function FixedMenu() {
  return _react2.default.createElement(
    _semanticUiReact.Menu,
    { fixed: 'top', size: 'large' },
    _react2.default.createElement(
      _semanticUiReact.Container,
      null,
      _react2.default.createElement(
        _semanticUiReact.Menu.Item,
        { as: 'a', active: true },
        'Home'
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
        'Careers'
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

var HomepageLayout = function (_Component) {
  _inherits(HomepageLayout, _Component);

  function HomepageLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomepageLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomepageLayout.__proto__ || Object.getPrototypeOf(HomepageLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideFixedMenu = function () {
      return _this.setState({ visible: false });
    }, _this.showFixedMenu = function () {
      return _this.setState({ visible: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomepageLayout, [{
    key: 'render',
    value: function render() {
      var visible = this.state.visible;


      return _react2.default.createElement(
        'div',
        null,
        visible ? _react2.default.createElement(FixedMenu, null) : null,
        _react2.default.createElement(
          _semanticUiReact.Visibility,
          {
            onBottomPassed: this.showFixedMenu,
            onBottomVisible: this.hideFixedMenu,
            once: false
          },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            {
              inverted: true,
              textAlign: 'center',
              style: { minHeight: 700, padding: '1em 0em' },
              vertical: true
            },
            _react2.default.createElement(
              _semanticUiReact.Container,
              null,
              _react2.default.createElement(
                _semanticUiReact.Menu,
                { inverted: true, pointing: true, secondary: true, size: 'large' },
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { as: 'a', active: true },
                  'Home'
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
                  'Careers'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Menu.Item,
                  { position: 'right' },
                  _react2.default.createElement(
                    _semanticUiReact.Button,
                    { as: 'a', inverted: true },
                    'Log in'
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Button,
                    { as: 'a', inverted: true, style: { marginLeft: '0.5em' } },
                    'Sign Up'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Container,
              { text: true },
              _react2.default.createElement(_semanticUiReact.Header, {
                as: 'h1',
                content: 'Imagine-a-Company',
                inverted: true,
                style: { fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }
              }),
              _react2.default.createElement(_semanticUiReact.Header, {
                as: 'h2',
                content: 'Do whatever you want when you want to.',
                inverted: true,
                style: { fontSize: '1.7em', fontWeight: 'normal' }
              }),
              _react2.default.createElement(
                _semanticUiReact.Button,
                { primary: true, size: 'huge' },
                'Get Started',
                _react2.default.createElement(_semanticUiReact.Icon, { name: 'right arrow' })
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '8em 0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { container: true, stackable: true, verticalAlign: 'middle' },
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              null,
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { width: 8 },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  'We Help Companies and Companions'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  'We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics.'
                ),
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  'We Make Bananas That Can Dance'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  'Yes that\'s right, you thought it was the stuff of dreams, but even bananas can be bioengineered.'
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { floated: 'right', width: 6 },
                _react2.default.createElement(_semanticUiReact.Image, {
                  bordered: true,
                  rounded: true,
                  size: 'large',
                  src: '/assets/images/wireframe/white-image.png'
                })
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              null,
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { textAlign: 'center' },
                _react2.default.createElement(
                  _semanticUiReact.Button,
                  { size: 'huge' },
                  'Check Them Out'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Grid,
            { celled: 'internally', columns: 'equal', stackable: true },
            _react2.default.createElement(
              _semanticUiReact.Grid.Row,
              { textAlign: 'center' },
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { style: { paddingBottom: '5em', paddingTop: '5em' } },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  '"What a Company"'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  'That is what they all say about us'
                )
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { style: { paddingBottom: '5em', paddingTop: '5em' } },
                _react2.default.createElement(
                  _semanticUiReact.Header,
                  { as: 'h3', style: { fontSize: '2em' } },
                  '"I shouldn\'t have gone with their competitor."'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '1.33em' } },
                  _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: '/assets/images/avatar/large/nan.jpg' }),
                  _react2.default.createElement(
                    'b',
                    null,
                    'Nan'
                  ),
                  ' Chief Fun Officer Acme Toys'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { style: { padding: '8em 0em' }, vertical: true },
          _react2.default.createElement(
            _semanticUiReact.Container,
            { text: true },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3', style: { fontSize: '2em' } },
              'Breaking The Grid, Grabs Your Attention'
            ),
            _react2.default.createElement(
              'p',
              { style: { fontSize: '1.33em' } },
              'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.'
            ),
            _react2.default.createElement(
              _semanticUiReact.Button,
              { as: 'a', size: 'large' },
              'Read More'
            ),
            _react2.default.createElement(
              _semanticUiReact.Divider,
              {
                as: 'h4',
                className: 'header',
                horizontal: true,
                style: { margin: '3em 0em', textTransform: 'uppercase' }
              },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Case Studies'
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h3', style: { fontSize: '2em' } },
              'Did We Tell You About Our Bananas?'
            ),
            _react2.default.createElement(
              'p',
              { style: { fontSize: '1.33em' } },
              'Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it\'s really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.'
            ),
            _react2.default.createElement(
              _semanticUiReact.Button,
              { as: 'a', size: 'large' },
              'I\'m Still Quite Interested'
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          { inverted: true, vertical: true, style: { padding: '5em 0em' } },
          _react2.default.createElement(
            _semanticUiReact.Container,
            null,
            _react2.default.createElement(
              _semanticUiReact.Grid,
              { divided: true, inverted: true, stackable: true },
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 3 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'About' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Sitemap'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Contact Us'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Religious Ceremonies'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Gazebo Plans'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 3 },
                  _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h4', content: 'Services' }),
                  _react2.default.createElement(
                    _semanticUiReact.List,
                    { link: true, inverted: true },
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Banana Pre-Order'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'DNA FAQ'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'How To Access'
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.List.Item,
                      { as: 'a' },
                      'Favorite X-Men'
                    )
                  )
                ),
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { width: 7 },
                  _react2.default.createElement(
                    _semanticUiReact.Header,
                    { as: 'h4', inverted: true },
                    'Footer Header'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Extra space for a call to action inside the footer that could help re-engage users.'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HomepageLayout;
}(_react.Component);

exports.default = HomepageLayout;