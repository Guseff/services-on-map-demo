import React, { Component } from 'react';
import ReactModal from 'react-modal';
import ApproveForm from '../ApproveForm';

import './style.css';

class ApproveMenu extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.closeApprove();
  }

  render() {
    const { showApprove_b, clickedMarker } = this.props;
    return (
      <div>
      <ReactModal 
        isOpen={showApprove_b}
        contentLabel="Minimal Modal Example"
        className="Modal ApproveModal"
        overlayClassName="Overlay"
      >
        <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
        <ApproveForm handleCloseModal={this.handleCloseModal} clickedMarker={clickedMarker} />
      </ReactModal>
      </div>
    );
  }
}

export default ApproveMenu;