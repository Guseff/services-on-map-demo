import React, { Component } from 'react';
import ReactModal from 'react-modal';
import GoogleLogin from 'react-google-login';

import './style.css';

class NotLoginModal extends Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  handleCloseModal() {
    this.props.closeNotLogin();
  }

  responseGoogle(response) {
    this.props.loginUser(response.w3);
    this.props.closeNotLogin();
  }

  render() {
    const { showNotLoginMod_b } = this.props;
    return (
      <div>
        <ReactModal 
          isOpen={showNotLoginMod_b}
          contentLabel="Minimal Modal Example"
          className="Modal NotLoginModal"
          overlayClassName="Overlay"
        >
          <button onClick={this.handleCloseModal}><img alt='' src='blue-close-sm.png' /></button>
          <h4>
            You have to login for work with App!
          </h4>
          <GoogleLogin
            clientId="732274642447-e5u8prip22va80rc4rou5tus04s3ecak.apps.googleusercontent.com"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            buttonText=""
            className="google-btn"
            uxMode="popup"
          />
        </ReactModal>
      </div>
    );
  }
}

export default NotLoginModal;