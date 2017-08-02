/* @flow */

import { fromJS } from 'immutable';
import {
  MODAL_OPEN_ACTION,
  MODAL_CLOSE_ACTION,
} from './constants';

import type {
  ModalActionType,
  ModalsStateType,
} from './types';

const initialState: ModalsStateType = fromJS({
  openedModalName: null,
});

function modalReducer(state: ModalsStateType = initialState, action: ModalActionType) {
  switch (action.type) {
    case MODAL_OPEN_ACTION:
      return onModalOpenAction(state, action);
    case MODAL_CLOSE_ACTION:
      return onModalCloseAction(state);
    default:
      return state;
  }
}

export const onModalOpenAction = (state: ModalsStateType, action: ModalActionType) => state.merge({
  openedModalName: action.name,
});

export const onModalCloseAction = (state: ModalsStateType) => state.merge({
  openedModalName: null,
});

export default modalReducer;
