'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.useGoogleMapsPredictions = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = require('react');

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

var DEFAULT_OPTIONS = Object.freeze({
    type: ['(cities)']
});

var useGoogleMapsPredictions = function useGoogleMapsPredictions(input) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
    var timer = (0, _react.useRef)();
    var autoCompleteService = (0, _react.useRef)(null);

    var _useState = (0, _react.useState)([]),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        predictions = _useState2[0],
        setPredictions = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
        ready = _useState4[0],
        setReady = _useState4[1];

    var handlePlacesPredictionsUpdate = (0, _react.useCallback)(function (receivedPredictions, status) {
        // eslint-disable-next-line no-undef
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
            setPredictions([]);
            return;
        }

        var filteredPredictions = receivedPredictions.filter(function (p) {
            return p.types && !p.types.includes('country');
        });
        setPredictions(filteredPredictions);
    }, []);
    (0, _react.useEffect)(function () {
        if (typeof google === 'undefined') {
            return;
        } // eslint-disable-next-line no-undef

        var googleInstance = google;

        if (!googleInstance.ready) {
            console.debug('Google instance did not finish initialization');
            return;
        }

        var gmapsInitError = googleInstance.init_error;

        if (gmapsInitError) {
            console.warn('Failed to init google maps autocomplete google.error is '.concat(gmapsInitError));
            return;
        }

        try {
            // eslint-disable-next-line no-undef
            autoCompleteService.current = new google.maps.places.AutocompleteService();
            setReady(true);
        } catch (e) {
            console.error('Failed to init google maps autocomplete service', e);
        }
    }, []);
    (0, _react.useEffect)(
        function () {
            if (!autoCompleteService.current) {
                return;
            }

            if (!input) {
                setPredictions([]);
                return;
            }

            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(
                autoCompleteService.current.getPlacePredictions(
                    _objectSpread(
                        {
                            input: input
                        },
                        options
                    ),
                    handlePlacesPredictionsUpdate
                ),
                200
            );
        },
        [input, autoCompleteService.current]
    );
    return {
        predictions: predictions,
        ready: ready
    };
};

exports.useGoogleMapsPredictions = useGoogleMapsPredictions;
