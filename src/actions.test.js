/* @flow */

import {
  modalOpenAction,
  modalCloseAction,
} from './actions';
import {
  MODAL_OPEN_ACTION,
  MODAL_CLOSE_ACTION,
} from './constants';

describe('Modal actions', () => {
  it('modalOpenAction should return MODAL_OPEN_ACTION type and name', () => {
    const expected = {
      type: MODAL_OPEN_ACTION,
      name: 'MODAL_NAME',
    };

    expect(modalOpenAction('MODAL_NAME')).toEqual(expected);
  });

  it('modalCloseAction should return MODAL_CLOSE_ACTION type and name', () => {
    const expected = {
      type: MODAL_CLOSE_ACTION,
      name: 'MODAL_NAME',
    };

    expect(modalCloseAction('MODAL_NAME')).toEqual(expected);
  });
});
