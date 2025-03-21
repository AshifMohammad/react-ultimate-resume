'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.translations = void 0;

var _reactIntl = require('react-intl');

var translations = (0, _reactIntl.defineMessages)({
    activelySearching: {
        id: 'Developer.developerJobSearchState.activelySearching',
        defaultMessage: "I'm actively searching for a job"
    },
    openOpportunities: {
        id: 'Developer.developerJobSearchState.openOpportunities',
        defaultMessage: "I'm open to job opportunities"
    },
    dreamjobOnly: {
        id: 'Developer.developerJobSearchState.dreamjobOnly',
        defaultMessage: "I'm only searching for my dream job"
    },
    notSearching: {
        id: 'Developer.developerJobSearchState.notSearching',
        defaultMessage: "I'm not open to opportunities "
    },
    unknown: {
        id: 'Developer.developerJobSearchState.unknown',
        defaultMessage: 'Unknown job search state'
    }
});
exports.translations = translations;
