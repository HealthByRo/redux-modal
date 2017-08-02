/* @flow */

import {
  MODAL_OPEN_ACTION,
  MODAL_CLOSE_ACTION,
} from './constants';

export function modalOpenAction(name: string) {
  return {
    type: MODAL_OPEN_ACTION,
    name,
  };
}

export function modalCloseAction(name: string) {
  return {
    type: MODAL_CLOSE_ACTION,
    name,
  };
}
