import React, { Component } from 'react';
import ReactModal from 'react-modal';
import NewMarkerForm from '../NewMarkerForm';
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
    const { showApprove, clickedMarker } = this.props;
    return (
      <div>
      <ReactModal 
        isOpen={showApprove}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={this.handleCloseModal}><img src='blue-close-sm.png' /></button>
        <ApproveForm handleCloseModal={this.handleCloseModal} clickedMarker={clickedMarker} />
      </ReactModal>
      </div>
    );
  }
}

export default ApproveMenu;