import React, { Component } from 'react';
import ReactModal from 'react-modal';

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
    const showModal = this.props;
    return (
      <ReactModal 
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={this.handleCloseModal}>Close Modal</button>
      </ReactModal>
    );
  }
}

export default MapMenu;