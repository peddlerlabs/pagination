'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var React = require('react');

function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
    var suffixes = ['', 'k', 'm', 'b', 't'];
    var suffixNum = Math.floor(('' + value).length / 3);
    var shortValue = '';
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat((suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision));
      var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(1);
    }

    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};

var Pager = function (_React$Component) {
  _inherits(Pager, _React$Component);

  function Pager() {
    _classCallCheck(this, Pager);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Pager.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.rootPrefixCls + '-item';
    var cls = prefixCls + ' ' + prefixCls + '-' + props.page;

    if (props.active) {
      cls = cls + ' ' + prefixCls + '-active';
    }

    if (props.className) {
      cls = cls + ' ' + props.className;
    }

    return React.createElement(
      'li',
      { title: props.page, className: cls, onClick: props.onClick },
      React.createElement(
        'a',
        null,
        abbreviateNumber(props.page)
      )
    );
  };

  return Pager;
}(React.Component);

Pager.propTypes = {
  page: React.PropTypes.number,
  active: React.PropTypes.bool,
  last: React.PropTypes.bool,
  locale: React.PropTypes.object,
  className: React.PropTypes.string
};

module.exports = Pager;