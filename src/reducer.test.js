/* @flow */
import { fromJS } from 'immutable';
import {
  MODAL_OPEN_ACTION,
  MODAL_CLOSE_ACTION,
} from './constants';
import modalsReducer from './reducer';

describe('modalsReducer', () => {
  describe('call with action: { type: UNSUPPORTED_TYPE}', () => {
    it('should return the initial state', () => {
      const initialState = fromJS({
        openedModalName: null,
      });

      expect(modalsReducer(undefined, { type: 'UNSUPPORTED_TYPE' })).toEqual(initialState);
      expect(modalsReducer(initialState, { type: 'UNSUPPORTED_TYPE' })).toEqual(initialState);
    });
  });

  describe('call with action: { type: MODAL_OPEN_ACTION, name: "MODAL_NAME" }', () => {
    it('should return { openedModalName: "MODAL_NAME" }', () => {
      const initialState = fromJS({
        openedModalName: null,
      });
      const received = modalsReducer(
        initialState,
        {
          type: MODAL_OPEN_ACTION,
          name: 'MODAL_NAME',
        }
      );
      const expected = fromJS({
        openedModalName: 'MODAL_NAME',
      });

      expect(received).toEqual(expected);
    });
  });

  describe('call with action: { type: MODAL_CLOSE_ACTION }', () => {
    it('should return { openedModalName: "" }', () => {
      const initialState = fromJS({
        openedModalName: 'MODAL_NAME',
      });
      const received = modalsReducer(
        initialState,
        {
          type: MODAL_CLOSE_ACTION,
        }
      );
      const expected = fromJS({
        openedModalName: null,
      });

      expect(received).toEqual(expected);
    });
  });
});
