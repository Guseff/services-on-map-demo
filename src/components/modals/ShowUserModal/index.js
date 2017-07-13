import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './style.css';

class ShowUserModal extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.closeUserModal();
  }

  renderUserInfo(user) {
    if (!user) return null;
    return (
      <div className="info">
        <img alt='' src={user.photoURL} />
        <p>Name: <span>{user.name}</span></p>
        <p>E-mail: <span>{user.email}</span></p>
        <p>Phone: <span>{user.phone}</span></p>
      </div>
    );
  }

  render() {
    const { showUserModal_b, loggedUser } = this.props;
    return (
      <div>
        <ReactModal 
          isOpen={showUserModal_b}
          contentLabel="Minimal Modal Example"
          className="Modal ShowUserModal"
          overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
          <h3>
            Information about User
          </h3>
          {this.renderUserInfo(loggedUser)}
        </ReactModal>
      </div>
    );
  }
}

export default ShowUserModal;