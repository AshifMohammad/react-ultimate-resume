'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.EditBannerImageDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _reactJss = require('react-jss');

var _reactIntl = require('react-intl');

var _ui = require('@welovedevs/ui');

var _core = require('@material-ui/core');

var _dialog_title = require('../../commons/dialog/dialog_title/dialog_title');

var _contexts = require('../../../utils/context/contexts');

var _file_drop_zone = require('../../commons/file_drop_zone/file_drop_zone');

var _search_unsplash_result = require('../../commons/search_unsplash_dialog/search_unsplash_result');

var _use_callback_open = require('../../hooks/use_callback_open');

var _edit_banner_image_dialog_styles = require('./edit_banner_image_dialog_styles');

var _url_failover_field = require('../../commons/url_failover_field/url_failover_field');

var useStyles = (0, _reactJss.createUseStyles)(_edit_banner_image_dialog_styles.styles);

var UnsplashButton = function UnsplashButton(_ref) {
    var setSearchUnsplashDialogOpened = _ref.setSearchUnsplashDialogOpened,
        hasUnsplashEndpoint = _ref.hasUnsplashEndpoint;
    var classes = useStyles();

    if (!hasUnsplashEndpoint) {
        return /*#__PURE__*/ _react.default.createElement(
            _ui.Typography,
            {
                className: classes.unsplashStub,
                component: 'div'
            },
            /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'Banner.EditImageDialog.noUnsplashButton',
                defaultMessage: '\u26A0\uFE0F No key, unsplash upload is disabled'
            })
        );
    }

    return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
            'div',
            {
                className: classes.buttonContainer
            },
            /*#__PURE__*/ _react.default.createElement(
                _ui.Button,
                {
                    color: 'primary',
                    variant: 'outlined',
                    onClick: setSearchUnsplashDialogOpened,
                    customClasses: {
                        container: classes.button
                    }
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Banner.EditImageDialog.unsplashButton',
                    defaultMessage: 'Search on unsplash'
                })
            )
        ),
        /*#__PURE__*/ _react.default.createElement(
            'div',
            {
                className: classes.divider
            },
            /*#__PURE__*/ _react.default.createElement(
                _ui.Typography,
                {
                    className: classes.dividerOr,
                    variant: 'h4',
                    component: 'h4'
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Main.Lang.Or',
                    defaultMessage: 'or'
                })
            )
        )
    );
};

var EditBannerImageDialogComponent = function EditBannerImageDialogComponent(_ref2) {
    var open = _ref2.open,
        onClose = _ref2.onClose,
        onChange = _ref2.onChange;

    var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
        _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
        openSearchUnsplashDialog = _useCallbackOpen2[0],
        setSearchUnsplashDialogOpened = _useCallbackOpen2[1],
        setSearchUnsplashDialogClosed = _useCallbackOpen2[2];

    var _useContext = (0, _react.useContext)(_contexts.StaticDataContext),
        endpoints = _useContext.endpoints;

    var _useContext2 = (0, _react.useContext)(_contexts.DeveloperProfileContext),
        onFilesUpload = _useContext2.onFilesUpload;

    var hasUnsplashEndpoint = (0, _react.useMemo)(
        function () {
            return !!endpoints.unsplashProxy;
        },
        [endpoints.unsplashProxy]
    );
    var needsFailoverField = (0, _react.useMemo)(
        function () {
            return !hasUnsplashEndpoint && !onFilesUpload;
        },
        [hasUnsplashEndpoint, onFilesUpload]
    );
    var onImageSelected = (0, _react.useCallback)(
        function (payload) {
            onChange(payload);
            onClose();
            setSearchUnsplashDialogClosed();
        },
        [onChange, onClose]
    );
    var onImageChanged = (0, _react.useCallback)(
        function (payload) {
            onChange(payload);
        },
        [onChange, onClose]
    );
    var onDrop = (0, _react.useCallback)(
        function (files) {
            return onFilesUpload(files).then(function (url) {
                onImageSelected({
                    url: url
                });
                return url;
            });
        },
        [onImageSelected]
    );
    var onClear = (0, _react.useCallback)(
        function () {
            return onImageSelected(null);
        },
        [onImageSelected]
    );
    return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        hasUnsplashEndpoint &&
            /*#__PURE__*/ _react.default.createElement(_search_unsplash_result.SearchUnsplashDialog, {
                open: openSearchUnsplashDialog,
                onClose: setSearchUnsplashDialogClosed,
                onSelect: onImageSelected
            }),
        /*#__PURE__*/ _react.default.createElement(
            _core.Dialog,
            {
                open: open,
                onClose: onClose
            },
            /*#__PURE__*/ _react.default.createElement(
                _dialog_title.DialogTitle,
                null,
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Banner.EditImageDialog.Title',
                    defaultMessage: 'Pick an image'
                })
            ),
            /*#__PURE__*/ _react.default.createElement(
                _core.DialogContent,
                null,
                /*#__PURE__*/ _react.default.createElement(UnsplashButton, {
                    setSearchUnsplashDialogOpened: setSearchUnsplashDialogOpened,
                    hasUnsplashEndpoint: hasUnsplashEndpoint
                }),
                /*#__PURE__*/ _react.default.createElement(_file_drop_zone.FileDropZone, {
                    disabled: !onFilesUpload,
                    onDrop: onDrop
                }),
                needsFailoverField &&
                    /*#__PURE__*/ _react.default.createElement(_url_failover_field.URLFailoverField, {
                        onChange: onImageChanged
                    })
            ),
            /*#__PURE__*/ _react.default.createElement(
                _core.DialogActions,
                null,
                /*#__PURE__*/ _react.default.createElement(
                    _ui.Button,
                    {
                        size: 'small',
                        color: 'danger',
                        onClick: onClear
                    },
                    /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                        id: 'Main.lang.clear',
                        defaultMessage: 'Clear'
                    })
                ),
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
                )
            )
        )
    );
};

var EditBannerImageDialog = EditBannerImageDialogComponent;
exports.EditBannerImageDialog = EditBannerImageDialog;
