/* @flow */

import { Map } from 'immutable';

export type ModalActionType = {
  type: string,
  name?: string,
};

export type ModalsStateType = Map<string, any>;

export type ModalProps = ModalComponentProps & {
  className?: string,
  component: any,
  contentLabel: string,
  name: string,
  openedModal: string,
  overlayClassName?: string,
  closeOnBackgroundClick?: boolean,
}

export type ModalComponentProps = {
  onClose: (name: string) => void,
  onOpen: (name: string) => void,
}
