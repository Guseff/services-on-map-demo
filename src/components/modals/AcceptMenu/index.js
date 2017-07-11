import React, { Component } from 'react';
import ReactModal from 'react-modal';
import AcceptForm from '../AcceptForm';

import './style.css';

class AcceptMenu extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.closeAccept();
  }

  render() {
    const { showAccept_b, clickedMarker } = this.props;
    return (
      <div>
      <ReactModal 
        isOpen={showAccept_b}
        contentLabel="Minimal Modal Example"
        className="Modal AcceptModal"
        overlayClassName="Overlay"
      >
        <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
        <AcceptForm handleCloseModal={this.handleCloseModal} clickedMarker={clickedMarker} />
      </ReactModal>
      </div>
    );
  }
}

export default AcceptMenu;