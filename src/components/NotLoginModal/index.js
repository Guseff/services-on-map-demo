import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './style.css';

class NotLoginModal extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.closeNotLogin();
  }

  render() {
    const { showAccept, clickedMarker, showNotLoginMod } = this.props;
    return (
      <div>
        <ReactModal 
          isOpen={showNotLoginMod}
          contentLabel="Minimal Modal Example"
          className="Modal NotLoginModal"
          overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
          <h4>
            You need to login for work with App!
          </h4>
          <button className='close-button' onClick={this.handleCloseModal}>CLOSE</button>
        </ReactModal>
      </div>
    );
  }
}

export default NotLoginModal;