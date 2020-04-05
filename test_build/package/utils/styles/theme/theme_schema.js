'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.THEME_SCHEMA = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var yup = _interopRequireWildcard(require('yup'));

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

var isHex = yup.string().matches(/^#[0-9a-f]{3,6}$/i, 'Color shade must be written using the hex color syntax.');
var SHADES_SCHEMA = Object.freeze(
    _objectSpread(
        {},
        [50, 100, 150, 200, 250, 300, 350, 400, 450, 550, 600, 650, 700, 750, 800, 850, 900].reduce(function (
            acc,
            shade
        ) {
            return _objectSpread({}, acc, (0, _defineProperty2.default)({}, shade, isHex.notRequired()));
        },
        {}),
        {
            500: isHex.required()
        }
    )
);
var isExistingColorInPalette = yup.string().test(
    'is-existing-color-in-palette',
    function (args) {
        return 'Color `'.concat(args.value, '` must be present in palette.');
    }, // eslint-disable-next-line func-names
    function (value) {
        var _this$options, _this$options$context, _this$options$context2;

        return Boolean(
            this === null || this === void 0
                ? void 0
                : (_this$options = this.options) === null || _this$options === void 0
                ? void 0
                : (_this$options$context = _this$options.context) === null || _this$options$context === void 0
                ? void 0
                : (_this$options$context2 = _this$options$context.palette) === null || _this$options$context2 === void 0
                ? void 0
                : _this$options$context2[value]
        );
    }
);
var CARD_VARIANT_SCHEMA = yup.object({
    backgroundColor: isExistingColorInPalette.required(),
    color: isExistingColorInPalette.required(),
    backBackgroundColor: isExistingColorInPalette.required(),
    backColor: isExistingColorInPalette.required()
});
var THEME_SCHEMA = yup.object({
    palette: yup.lazy(function () {
        var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return yup.object(
            Object.keys(colors).reduce(function (acc, name) {
                return _objectSpread(
                    {},
                    acc,
                    (0, _defineProperty2.default)(
                        {},
                        name,
                        yup.object(
                            _objectSpread({}, SHADES_SCHEMA, {
                                contrastDefaultColor: yup.string().required()
                            })
                        )
                    )
                );
            }, {})
        );
    }),
    miscellaneous: yup.object({
        backgroundColor: isHex.required(),
        color: isHex.required(),
        spacing: yup.number().required(),
        fontFamily: yup.array().of(yup.string())
    }),
    sizes: yup.object({
        small: yup.string().required(),
        medium: yup.string().required()
    }),
    components: yup.object({
        banner: yup.object({
            overlayColor: isExistingColorInPalette.required(),
            imageSource: yup.string().required()
        }),
        cards: yup.object({
            height: yup.number().required(),
            width: yup.number().required(),
            borderRadius: yup.number().required(),
            default: CARD_VARIANT_SCHEMA,
            variants: yup.array().of(CARD_VARIANT_SCHEMA).required()
        })
    })
});
exports.THEME_SCHEMA = THEME_SCHEMA;
