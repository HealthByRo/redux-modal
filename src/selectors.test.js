import { fromJS } from 'immutable';
import {
  selectModalsDomain,
  selectOpenedModal,
} from './selectors';

const state = fromJS({
  modal: {
    openedModalName: 'MODAL_NAME',
  },
});

describe('Modal selectors', () => {
  it('selectModalsDomain should return { openedModalName: "MODAL_NAME" }', () => {
    expect(selectModalsDomain(state)).toEqual(state.get('modal'));
  });

  it('selectOpenedModal should return "MODAL_NAME"', () => {
    expect(selectOpenedModal(state)).toEqual('MODAL_NAME');
  });
});
