import React, { Component } from 'react';
import ReactModal from 'react-modal';
import NewMarkerForm from '../NewMarkerForm';
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
    const { showAccept } = this.props;
    return (
      <div>
      <ReactModal 
        isOpen={showAccept}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={this.handleCloseModal}><img src='blue-close-sm.png' /></button>
        <AcceptForm handleCloseModal={this.handleCloseModal} />
      </ReactModal>
      </div>
    );
  }
}

export default AcceptMenu;