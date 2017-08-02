'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onModalCloseAction = exports.onModalOpenAction = undefined;

var _immutable = require('immutable');

var _constants = require('./constants');

var initialState = (0, _immutable.fromJS)({
  openedModalName: null
});

function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.MODAL_OPEN_ACTION:
      return onModalOpenAction(state, action);
    case _constants.MODAL_CLOSE_ACTION:
      return onModalCloseAction(state);
    default:
      return state;
  }
}

var onModalOpenAction = exports.onModalOpenAction = function onModalOpenAction(state, action) {
  return state.merge({
    openedModalName: action.name
  });
};

var onModalCloseAction = exports.onModalCloseAction = function onModalCloseAction(state) {
  return state.merge({
    openedModalName: null
  });
};

exports.default = modalReducer;