'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.DeveloperProfile = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _reactIntl = require('react-intl');

var _reactJss = require('react-jss');

var _mergeWith = _interopRequireDefault(require('lodash/mergeWith'));

var _cloneDeep = _interopRequireDefault(require('lodash/cloneDeep'));

var _theme = require('../utils/styles/theme/theme');

var _banner = require('./banner/banner');

var _cards = require('./cards/cards');

var _profile_styles = require('./profile_styles');

var _en = _interopRequireDefault(require('../i18n/en.json'));

var _fr = _interopRequireDefault(require('../i18n/fr.json'));

var _technologies_reducer = require('../store/technologies/technologies_reducer');

var _contexts = require('../utils/context/contexts');

var _footer = require('./footer/footer');

var _data_utils = require('../utils/data_utils');

var _side = require('./commons/profile_card/profile_card_side/side');

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
                (0, _defineProperty2.default)(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

if (!Intl.PluralRules) {
    // eslint-disable-next-line global-require
    require('@formatjs/intl-pluralrules/polyfill'); // eslint-disable-next-line global-require

    require('@formatjs/intl-pluralrules/dist/locale-data/en'); // eslint-disable-next-line global-require

    require('@formatjs/intl-pluralrules/dist/locale-data/fr');
}

var messages = {
    en: _en.default,
    fr: _fr.default
};
var useStyles = (0, _reactJss.createUseStyles)(_profile_styles.styles);
var DEFAULT_OPTIONS = Object.freeze({
    locale: 'en',
    customization: {
        imageHeader: {
            url: 'https://cdn.filestackcontent.com/8I2wVnCRTFxypXRYLRsp',
            alt: 'Default Banner'
        }
    },
    dismissFooter: false
});
var DEFAULT_OBJECT = {};

var DEFAULT_FUNCTION = function DEFAULT_FUNCTION() {};

var DeveloperProfileComponent = function DeveloperProfileComponent(_ref) {
    var _options$customizatio;

    var _ref$data = _ref.data,
        originalData = _ref$data === void 0 ? DEFAULT_OBJECT : _ref$data,
        options = _ref.options,
        mode = _ref.mode,
        _ref$onEdit = _ref.onEdit,
        onEditProps = _ref$onEdit === void 0 ? DEFAULT_FUNCTION : _ref$onEdit,
        _ref$onIsEditingChang = _ref.onIsEditingChanged,
        onIsEditingChanged = _ref$onIsEditingChang === void 0 ? DEFAULT_FUNCTION : _ref$onIsEditingChang,
        onCustomizationChanged = _ref.onCustomizationChanged,
        onFilesUpload = _ref.onFilesUpload,
        additionalNodes = _ref.additionalNodes,
        _ref$classes = _ref.classes,
        receivedGlobalClasses = _ref$classes === void 0 ? {} : _ref$classes;
    var classes = useStyles(_profile_styles.styles);
    var apiKeys = options.apiKeys,
        endpoints = options.endpoints;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        isEditing = _useState2[0],
        setIsEditing = _useState2[1];

    var onEdit = (0, _react.useCallback)(
        function (newData) {
            if (typeof onEditProps === 'function') {
                onEditProps(newData);
            }
        },
        [onEditProps]
    );
    var setIsEditingWithCallback = (0, _react.useCallback)(
        function (newValue) {
            setIsEditing(newValue);
            onIsEditingChanged(newValue);
        },
        [onIsEditingChanged, setIsEditing]
    );
    var store = {
        technologies: (0, _react.useReducer)(
            _technologies_reducer.technologiesReducer,
            _technologies_reducer.technologiesInitialState
        )
    };
    var staticContext = (0, _react.useMemo)(
        function () {
            return {
                apiKeys: {
                    giphy: apiKeys === null || apiKeys === void 0 ? void 0 : apiKeys.giphy,
                    unsplash: apiKeys === null || apiKeys === void 0 ? void 0 : apiKeys.unsplash
                },
                endpoints: endpoints,
                additionalNodes: additionalNodes,
                receivedGlobalClasses: receivedGlobalClasses,
                customization: options === null || options === void 0 ? void 0 : options.customization
            };
        },
        [
            apiKeys,
            endpoints,
            additionalNodes,
            receivedGlobalClasses,
            JSON.stringify(options === null || options === void 0 ? void 0 : options.customization)
        ]
    );
    var data = (0, _react.useMemo)(
        function () {
            return originalData;
        },
        [JSON.stringify(originalData)]
    );
    var context = (0, _react.useMemo)(
        function () {
            return {
                data: data,
                isEditing: isEditing,
                setIsEditing: setIsEditingWithCallback,
                onEdit: onEdit,
                onCustomizationChanged: onCustomizationChanged,
                onFilesUpload: onFilesUpload,
                mode: mode
            };
        },
        [data, isEditing, onEdit, mode, onCustomizationChanged, onFilesUpload]
    );
    var side = (0, _react.useMemo)(
        function () {
            return (isEditing && _side.SIDES.BACK) || (options === null || options === void 0 ? void 0 : options.side);
        },
        [options, isEditing]
    );
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.container
        },
        /*#__PURE__*/ _react.default.createElement(
            _contexts.StaticDataContext.Provider,
            {
                value: staticContext
            },
            /*#__PURE__*/ _react.default.createElement(
                _contexts.StoreContext.Provider,
                {
                    value: store
                },
                /*#__PURE__*/ _react.default.createElement(
                    _contexts.DeveloperProfileContext.Provider,
                    {
                        value: context
                    },
                    /*#__PURE__*/ _react.default.createElement(_banner.Banner, {
                        customizationOptions: options.customization,
                        onCustomizationChanged: onCustomizationChanged
                    }),
                    additionalNodes === null || additionalNodes === void 0 ? void 0 : additionalNodes.beforeCards,
                    /*#__PURE__*/ _react.default.createElement(_cards.Cards, {
                        cardsOrder:
                            (_options$customizatio = options.customization) === null || _options$customizatio === void 0
                                ? void 0
                                : _options$customizatio.cardsOrder,
                        side: side
                    }),
                    !options.dismissFooter && /*#__PURE__*/ _react.default.createElement(_footer.Footer, null)
                )
            )
        )
    );
};

var WithProvidersDeveloperProfile = function WithProvidersDeveloperProfile(_ref2) {
    var data = _ref2.data,
        onEdit = _ref2.onEdit,
        onCustomizationChanged = _ref2.onCustomizationChanged,
        onIsEditingChanged = _ref2.onIsEditingChanged,
        _ref2$options = _ref2.options,
        options = _ref2$options === void 0 ? {} : _ref2$options,
        _ref2$mode = _ref2.mode,
        mode = _ref2$mode === void 0 ? 'readOnly' : _ref2$mode,
        additionalNodes = _ref2.additionalNodes,
        classes = _ref2.classes,
        onFilesUpload = _ref2.onFilesUpload,
        parentIntl = _ref2.intl;
    var mergedOptions = (0, _react.useMemo)(
        function () {
            return (0, _mergeWith.default)(
                (0, _cloneDeep.default)(DEFAULT_OPTIONS),
                JSON.parse(JSON.stringify(options || {})),
                _data_utils.mergeOmitNull
            );
        },
        [JSON.stringify(options)]
    );
    var locale = mergedOptions.locale,
        customization = mergedOptions.customization;
    var builtTheme = (0, _react.useMemo)(
        function () {
            return (0, _theme.buildTheme)(
                customization === null || customization === void 0 ? void 0 : customization.theme
            );
        },
        [customization === null || customization === void 0 ? void 0 : customization.theme]
    );
    var providerMessages = (0, _react.useMemo)(
        function () {
            return _objectSpread(
                {},
                (parentIntl === null || parentIntl === void 0 ? void 0 : parentIntl.messages) || {},
                {},
                messages[locale] || messages.en
            );
        },
        [parentIntl, locale]
    );
    return /*#__PURE__*/ _react.default.createElement(
        _reactJss.ThemeProvider,
        {
            theme: builtTheme
        },
        /*#__PURE__*/ _react.default.createElement(
            _reactIntl.IntlProvider,
            {
                locale: locale,
                messages: providerMessages,
                defaultLocale: locale
            },
            /*#__PURE__*/ _react.default.createElement(DeveloperProfileComponent, {
                data: data,
                mode: mode,
                onEdit: onEdit,
                onCustomizationChanged: onCustomizationChanged,
                onIsEditingChanged: onIsEditingChanged,
                options: mergedOptions,
                additionalNodes: additionalNodes,
                onFilesUpload: onFilesUpload,
                classes: classes
            })
        )
    );
};

var DeveloperProfile = (0, _reactIntl.injectIntl)(WithProvidersDeveloperProfile, {
    enforceContext: false
});
exports.DeveloperProfile = DeveloperProfile;
