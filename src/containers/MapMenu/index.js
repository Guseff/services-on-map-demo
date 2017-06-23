import React, { Component } from 'react';
import ReactModal from 'react-modal';
import NewMarkerForm from '../NewMarkerForm';

import './style.css';

class MapMenu extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.closeModal();
  }

  render() {
    const { showModal } = this.props;
    return (
      <div>
      <ReactModal 
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
        <NewMarkerForm handleCloseModal={this.handleCloseModal} />
      </ReactModal>
      </div>
    );
  }
}

export default MapMenu;