'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _react2 = require('@testing-library/react');

var _reactJss = require('react-jss');

var _reactIntl = require('react-intl');

var _en = _interopRequireDefault(require('../../../i18n/en.json'));

var _theme = require('../../../utils/styles/theme/theme');

var _confirm_dialog = require('./confirm_dialog');

var Providers = function Providers(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/ _react.default.createElement(
        _reactJss.ThemeProvider,
        {
            theme: (0, _theme.buildTheme)()
        },
        /*#__PURE__*/ _react.default.createElement(
            _reactIntl.IntlProvider,
            {
                locale: 'en',
                defaultLocale: 'en',
                messages: _en.default
            },
            children
        )
    );
};

describe('<ConfirmDialog />', function () {
    it('should render with the default title', function () {
        var screen = (0, _react2.render)(
            /*#__PURE__*/ _react.default.createElement(
                Providers,
                null,
                /*#__PURE__*/ _react.default.createElement(_confirm_dialog.ConfirmDialog, {
                    open: true
                })
            )
        );
        expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    });
    it('should call the onClose function when click close', function () {
        var onClose = jest.fn();
        var screen = (0, _react2.render)(
            /*#__PURE__*/ _react.default.createElement(
                Providers,
                null,
                /*#__PURE__*/ _react.default.createElement(_confirm_dialog.ConfirmDialog, {
                    open: true,
                    onClose: onClose
                })
            )
        );

        _react2.fireEvent.click(screen.getByText('Close'));

        expect(onClose).toHaveBeenCalled();
    });
});
