'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.URLFallbackDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _core = require('@material-ui/core');

var _reactIntl = require('react-intl');

var _ui = require('@welovedevs/ui');

var _dialog_title = require('../dialog/dialog_title/dialog_title');

var _url_failover_field = require('../url_failover_field/url_failover_field');

var URLFallbackDialog = function URLFallbackDialog(_ref) {
    var open = _ref.open,
        onClose = _ref.onClose,
        onChange = _ref.onChange,
        inputValue = _ref.value;

    var _useState = (0, _react.useState)(inputValue),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    (0, _react.useEffect)(
        function () {
            return setValue(inputValue);
        },
        [inputValue]
    );
    var handleUrlChange = (0, _react.useCallback)(function (_ref2) {
        var url = _ref2.url;
        return setValue(url);
    }, []);
    var handleSave = (0, _react.useCallback)(
        function () {
            onChange(value);
            onClose();
        },
        [value, onChange]
    );
    return /*#__PURE__*/ _react.default.createElement(
        _core.Dialog,
        {
            open: open,
            onClose: onClose
        },
        /*#__PURE__*/ _react.default.createElement(
            _dialog_title.DialogTitle,
            null,
            /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'Gifs.searchdialog.failoverTitle',
                defaultMessage: 'Enter an url'
            })
        ),
        /*#__PURE__*/ _react.default.createElement(
            _core.DialogContent,
            null,
            /*#__PURE__*/ _react.default.createElement(
                _ui.Typography,
                {
                    component: 'div'
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Gifs.searchdialog.nogiphy',
                    defaultMessage: '\u26A0\uFE0F No key, giphy search is disabled'
                })
            ),
            /*#__PURE__*/ _react.default.createElement(_url_failover_field.URLFailoverField, {
                value: value,
                onChange: handleUrlChange
            })
        ),
        /*#__PURE__*/ _react.default.createElement(
            _core.DialogActions,
            null,
            /*#__PURE__*/ _react.default.createElement(
                _ui.Button,
                {
                    size: 'small',
                    onClick: onClose
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Main.lang.close',
                    defaultMessage: 'Close'
                })
            ),
            /*#__PURE__*/ _react.default.createElement(
                _ui.Button,
                {
                    size: 'small',
                    color: 'primary',
                    onClick: handleSave
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Main.lang.save',
                    defaultMessage: 'Save'
                })
            )
        )
    );
};

exports.URLFallbackDialog = URLFallbackDialog;
