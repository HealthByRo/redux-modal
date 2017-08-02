/* @flow */

import { createSelector } from 'reselect';
import type { ModalsStateType } from './types';

export const selectModalsDomain = (state: ModalsStateType) => state.get('modal');
export const getOpened = (state: ModalsStateType) => state.get('openedModalName');

export const selectOpenedModal = createSelector(
  selectModalsDomain,
  getOpened,
);
