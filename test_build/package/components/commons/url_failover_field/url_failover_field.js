'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.URLFailoverField = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _ui = require('@welovedevs/ui');

var _reactIntl = require('react-intl');

var _reactJss = require('react-jss');

var _url_failover_field_styles = require('./url_failover_field_styles');

var useStyles = (0, _reactJss.createUseStyles)(_url_failover_field_styles.styles);

var URLFailoverField = function URLFailoverField(_ref) {
    var onChange = _ref.onChange,
        inputValue = _ref.value;
    var classes = useStyles();

    var _useState = (0, _react.useState)(null),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        input = _useState2[0],
        setInput = _useState2[1];

    (0, _react.useEffect)(
        function () {
            return setInput(inputValue);
        },
        [inputValue]
    );
    var handleChange = (0, _react.useCallback)(
        function (e) {
            setInput(e.target.value);
            onChange({
                url: e.target.value
            });
        },
        [input]
    );
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.container
        },
        /*#__PURE__*/ _react.default.createElement(
            _ui.Typography,
            {
                component: 'div',
                className: classes.title
            },
            /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'URLFailover.title',
                defaultMessage: 'Enter an URL'
            })
        ),
        /*#__PURE__*/ _react.default.createElement(_ui.TextField, {
            fullWidth: true,
            variant: 'flat',
            placeholder: 'URL',
            onChange: handleChange,
            name: 'name',
            value: input
        })
    );
};

exports.URLFailoverField = URLFailoverField;
