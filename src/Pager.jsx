const React = require('react');

function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ['', 'k', 'm', 'b', 't'];
        var suffixNum = Math.floor(('' + value).length / 3);
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 !== 0) {
            shortValue = shortValue.toFixed(1);
        }

        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
};

class Pager extends React.Component {
  render() {
    const props = this.props;
    const prefixCls = `${props.rootPrefixCls}-item`;
    let cls = `${prefixCls} ${prefixCls}-${props.page}`;

    if (props.active) {
      cls = `${cls} ${prefixCls}-active`;
    }

    if (props.className) {
      cls = `${cls} ${props.className}`;
    }

    return (
      <li title={props.page} className={cls} onClick={props.onClick}>
        <a>{abbreviateNumber(props.page)}</a>
      </li>
    );
  }
}

Pager.propTypes = {
  page: React.PropTypes.number,
  active: React.PropTypes.bool,
  last: React.PropTypes.bool,
  locale: React.PropTypes.object,
  className: React.PropTypes.string,
};

module.exports = Pager;
