import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import onClickOutside from 'react-onclickoutside';

import './style.css';

class LoginMenu extends Component {
  constructor() {
    super();

    this.handleClose = this.handleClose.bind(this);
    this.clickLogOut = this.clickLogOut.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.renderLoginButt = this.renderLoginButt.bind(this);
    this.handleUserModal = this.handleUserModal.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
  }

  handleClickOutside(evt) {
    this.props.closeLoginMenu();
  }

  responseGoogle(response) {
    this.props.loginUser(response.w3);
    this.props.closeLoginMenu();
  }

  handleClose() {
    this.props.closeLoginMenu();
  }

  handleUserModal() {
    this.props.showUserModal();
  }

  handleEditUser() {
    this.props.showEditUser();
  }

  clickLogOut() {
    this.props.logOutUser();
    this.props.closeLoginMenu();
  }

  renderLoginButt() {
    return (
      <div>
      <GoogleLogin
        clientId="732274642447-e5u8prip22va80rc4rou5tus04s3ecak.apps.googleusercontent.com"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        buttonText=""
        className="google-btn"
        uxMode="popup"
      />
      </div>
    );
  }

  renderLogoutButt() {
    return (
      <div>
        <button className='logout-a' onClick={this.handleUserModal}>MY PROFILE</button>
        <button className='logout-a' onClick={this.handleEditUser}>EDIT PROFILE</button>
        <button className='logout-a' onClick={this.clickLogOut}>LOG OUT</button>
      </div>
    );
  }

  render() {
    const { showLogMenu, loggedUser } = this.props;
    if (showLogMenu) {
      return (
        <div className='login-menu'>
          <div className='triangle-white'></div>       
          {loggedUser ? this.renderLogoutButt() : this.renderLoginButt()}                   
        </div>
      );
    }
    return null;
  }
}

export default onClickOutside(LoginMenu);