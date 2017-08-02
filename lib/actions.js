'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalOpenAction = modalOpenAction;
exports.modalCloseAction = modalCloseAction;

var _constants = require('./constants');

function modalOpenAction(name) {
  return {
    type: _constants.MODAL_OPEN_ACTION,
    name: name
  };
}

function modalCloseAction(name) {
  return {
    type: _constants.MODAL_CLOSE_ACTION,
    name: name
  };
}