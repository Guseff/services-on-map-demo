import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './style.css';

class ShowUserModal extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  handleCloseModal() {
    this.props.closeShowUser();
  }

  render() {
    const { showUserModal_b } = this.props;
    return (
      <div>
        <ReactModal 
          isOpen={showUserModal_b}
          contentLabel="Minimal Modal Example"
          className="Modal NotLoginModal"
          overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
          <h4>
            Information about User!
          </h4>
        </ReactModal>
      </div>
    );
  }
}

export default ShowUserModal;