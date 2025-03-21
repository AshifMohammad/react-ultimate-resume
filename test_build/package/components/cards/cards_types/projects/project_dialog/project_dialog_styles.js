'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _styles_utils = require('../../../../../utils/styles/styles_utils');

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

var styles = function styles(theme) {
    var spacing = theme.miscellaneous.spacing;
    return (0, _defineProperty2.default)(
        {
            paper: {
                maxWidth: [1000, '!important']
            },
            content: _objectSpread(
                {
                    display: 'flex',
                    flexDirection: 'column',
                    padding: [[spacing, spacing * 6], '!important'],
                    overflow: 'overlay'
                },
                (0, _styles_utils.withCustomVerticalScrollbar)()
            ),
            headrow: {
                display: 'flex'
            }
        },
        (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small),
        {
            headrow: {
                flexDirection: 'column'
            }
        }
    );
};

exports.styles = styles;
