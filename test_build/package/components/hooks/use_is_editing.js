'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.useIsEditing = void 0;

var _react = require('react');

var _contexts = require('../../utils/context/contexts');

var useIsEditing = function useIsEditing() {
    var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
        isEditing = _useContext.isEditing;

    var memoizedValue = (0, _react.useMemo)(
        function () {
            return isEditing;
        },
        [isEditing]
    );
    return [memoizedValue];
};

exports.useIsEditing = useIsEditing;
