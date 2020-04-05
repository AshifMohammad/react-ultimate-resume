'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _reactIntl = require('react-intl');

var _reactJss = require('react-jss');

var _isArray = _interopRequireDefault(require('lodash/isArray'));

var _mergeWith = _interopRequireDefault(require('lodash/mergeWith'));

var _omit = _interopRequireDefault(require('lodash/omit'));

var _cloneDeep = _interopRequireDefault(require('lodash/cloneDeep'));

var _downloadjs = _interopRequireDefault(require('downloadjs'));

var _ui = require('@welovedevs/ui');

var _json_stub = _interopRequireDefault(require('./data/json_stub.json'));

var _package = _interopRequireDefault(require('./package'));

var _app_styles = require('./app_styles');

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

var SaveIcon = function SaveIcon(props) {
    return /*#__PURE__*/ _react.default.createElement(
        'svg',
        props,
        /*#__PURE__*/ _react.default.createElement(
            'g',
            {
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.5'
            },
            /*#__PURE__*/ _react.default.createElement('path', {
                d:
                    'M28.75 18.75c5.524 0 10 4.477 10 10s-4.476 10-10 10-10-4.476-10-10 4.477-10 10-10zM28.75 23.75v10M28.75 33.75L25 30M28.75 33.75L32.5 30M6.25 11.25h17.5M6.25 18.75h10M6.25 26.25h6.25M12.5 33.75H3.75c-1.38 0-2.5-1.12-2.5-2.5V3.75c0-1.38 1.12-2.5 2.5-2.5h17.715c.664 0 1.299.263 1.767.732l4.787 4.786c.468.469.732 1.104.732 1.767V12.5',
                strokeWidth: '2.50005'
            })
        )
    );
};

SaveIcon.defaultProps = {
    viewBox: '0 0 40 40',
    xmlns: 'http://www.w3.org/2000/svg'
};
var useStyles = (0, _reactJss.createUseStyles)(_app_styles.styles);

var mergeFunction = function mergeFunction(objValue, srcValue, key) {
    console.log({
        objValue: objValue,
        srcValue: srcValue,
        key: key
    });

    if (!objValue || (0, _isArray.default)(objValue)) {
        return srcValue;
    }

    return undefined;
};

var mode = process.env.REACT_APP_MODE || 'edit';

function App() {
    var classes = useStyles();

    var _useState = (0, _react.useState)((0, _omit.default)(_json_stub.default, 'resumeCustomization')),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

    var onEdit = (0, _react.useCallback)(
        function (newData) {
            return setData((0, _mergeWith.default)((0, _cloneDeep.default)(data), newData, mergeFunction));
        },
        [JSON.stringify(data)]
    );

    var _useState3 = (0, _react.useState)(_json_stub.default.resumeCustomization || {}),
        _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
        customization = _useState4[0],
        setCustomization = _useState4[1];

    var onCustomizationChanged = (0, _react.useCallback)(setCustomization, [data]);
    var handleClick = (0, _react.useCallback)(
        /*#__PURE__*/ (0, _asyncToGenerator2.default)(
            /*#__PURE__*/ _regenerator.default.mark(function _callee() {
                var _data$basics;

                var blob;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch ((_context.prev = _context.next)) {
                            case 0:
                                // eslint-disable-next-line no-undef
                                blob = new Blob(
                                    [
                                        JSON.stringify(
                                            _objectSpread({}, data, {
                                                resumeCustomization: customization
                                            })
                                        )
                                    ],
                                    {
                                        type: 'text/plain; charset=utf-8'
                                    }
                                );
                                (0, _downloadjs.default)(
                                    blob,
                                    ''.concat(
                                        'Resume-'
                                            .concat(
                                                (data === null || data === void 0
                                                    ? void 0
                                                    : (_data$basics = data.basics) === null || _data$basics === void 0
                                                    ? void 0
                                                    : _data$basics.name) || 'Developer'
                                            )
                                            .replace(' ', '-'),
                                        '.json'
                                    ),
                                    'text/plain; charset=utf-8'
                                );

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee);
            })
        ),
        [JSON.stringify(data), JSON.stringify(customization)]
    );
    return /*#__PURE__*/ _react.default.createElement(_package.default, {
        mode: mode,
        data: data,
        onEdit: onEdit,
        onCustomizationChanged: onCustomizationChanged,
        options: {
            // side: 'back',
            apiKeys: {
                giphy: process.env.REACT_APP_GIPHY
            },
            endpoints: {
                devicons:
                    'https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2'
            },
            customization: customization
        },
        additionalNodes: {
            banner: {
                actionsButtons:
                    mode === 'edit' &&
                    /*#__PURE__*/ _react.default.createElement(
                        _ui.Button,
                        {
                            variant: 'outlined',
                            onClick: handleClick,
                            color: 'light'
                        },
                        /*#__PURE__*/ _react.default.createElement(SaveIcon, {
                            className: classes.saveIcon
                        }),
                        /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                            id: 'Profile.header.jsonResume.download',
                            defaultMessage: 'Export'
                        })
                    )
            }
        }
    });
}

var _default = App;
exports.default = _default;
