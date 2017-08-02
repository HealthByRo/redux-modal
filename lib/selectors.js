'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectOpenedModal = exports.getOpened = exports.selectModalsDomain = undefined;

var _reselect = require('reselect');

var selectModalsDomain = exports.selectModalsDomain = function selectModalsDomain(state) {
  return state.get('modal');
};

var getOpened = exports.getOpened = function getOpened(state) {
  return state.get('openedModalName');
};

var selectOpenedModal = exports.selectOpenedModal = (0, _reselect.createSelector)(selectModalsDomain, getOpened);