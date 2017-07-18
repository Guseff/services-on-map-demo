import React, { Component } from 'react';
import ReactModal from 'react-modal';
import EditUserForm from '../EditUserForm';

import './style.css';

class EditUserModal extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.closeEditUser();
  }

  render() {
    const { editUserModal_b } = this.props;
    return (
      <div>
        <ReactModal 
          isOpen={editUserModal_b}
          contentLabel="Minimal Modal Example"
          className="Modal EditUserModal"
          overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
          <EditUserForm handleCloseModal={this.handleCloseModal} />
        </ReactModal>
      </div>
    );
  }
}

export default EditUserModal;