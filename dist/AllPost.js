'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _EditComponent = require('./EditComponent');

var _EditComponent2 = _interopRequireDefault(_EditComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllPost = function (_Component) {
  _inherits(AllPost, _Component);

  function AllPost() {
    _classCallCheck(this, AllPost);

    return _possibleConstructorReturn(this, (AllPost.__proto__ || Object.getPrototypeOf(AllPost)).apply(this, arguments));
  }

  _createClass(AllPost, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { className: 'post_heading' },
          'All Connections'
        ),
        this.props.posts.map(function (post) {
          return _react2.default.createElement(
            'div',
            { key: post.id },
            post.editing ? _react2.default.createElement(_EditComponent2.default, { post: post, key: post.id }) : _react2.default.createElement(_Post2.default, { post: post,
              key: post.id })
          );
        })
      );
    }
  }]);

  return AllPost;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(AllPost);