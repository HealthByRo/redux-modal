/* @flow */

import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import _bindAll from 'lodash/bindAll';
import {
  selectOpenedModal,
} from '../selectors';
import {
  modalCloseAction,
  modalOpenAction,
} from '../actions';
import type {
  ModalProps,
} from '../types';

const mapStateToProps = (state) => ({
  openedModal: selectOpenedModal(state),
});

const mapDispatchToProps = {
  onClose: modalCloseAction,
  onOpen: modalOpenAction,
};

class Modal extends PureComponent {
  static defaultProps = {
    className: 'modal',
    closeOnBackgroundClick: true,
    overlayClassName: 'modal-overlay',
    closeTimeoutMS: 0,
  }

  constructor(props: ModalProps) {
    super(props);

    _bindAll(this, [
      'closeModal',
    ]);
  }

  isOpen() {
    const {
      name,
      openedModal,
    } = this.props;

    return name === openedModal;
  }

  closeModal() {
    const {
      name,
      onClose,
    } = this.props;

    onClose(name);
  }

  props: ModalProps

  render() {
    const {
      className,
      closeOnBackgroundClick,
      component: Component,
      contentLabel,
      onClose,
      onOpen,
      overlayClassName,
      closeTimeoutMS,
      ...otherProps
    } = this.props;
    const isOpen = this.isOpen();

    return (
      <ReactModal
        className={className}
        contentLabel={contentLabel}
        isOpen={isOpen}
        overlayClassName={overlayClassName}
        shouldCloseOnOverlayClick={closeOnBackgroundClick}
        onRequestClose={this.closeModal}
        closeTimeoutMS={closeTimeoutMS}
      >
        <Component
          onClose={onClose}
          onOpen={onOpen}
          {...otherProps}
        />
      </ReactModal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
