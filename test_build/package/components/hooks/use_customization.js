'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.useCustomization = void 0;

var _react = require('react');

var _contexts = require('../../utils/context/contexts');

var useCustomization = function useCustomization() {
    var _useContext = (0, _react.useContext)(_contexts.StaticDataContext),
        customization = _useContext.customization;

    var memoizedValue = (0, _react.useMemo)(
        function () {
            return customization;
        },
        [JSON.stringify(customization)]
    );
    return [memoizedValue];
};

exports.useCustomization = useCustomization;
