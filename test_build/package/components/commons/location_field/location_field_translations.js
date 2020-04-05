'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.translations = void 0;

var _reactIntl = require('react-intl');

var translations = (0, _reactIntl.defineMessages)({
    title: {
        id: 'DeveloperProfile.locationField.label',
        defaultMessage: 'Location'
    },
    placeholder: {
        id: 'DeveloperProfile.locationField.placeholder',
        defaultMessage: 'Start typing to search (ex : Paris...)'
    },
    stubPlaceholder: {
        id: 'DeveloperProfile.locationField.stubPlaceholder',
        defaultMessage: 'Your location '
    }
});
exports.translations = translations;
