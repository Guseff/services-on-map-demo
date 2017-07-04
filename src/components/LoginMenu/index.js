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
  }

  handleClickOutside(evt) {
    // ..handling code goes here... 
    this.props.closeLoginMenu();
  }

  responseGoogle(response) {
    this.props.loginUser(response.w3);
    this.props.closeLoginMenu();
  }

  handleClose() {
    this.props.closeLoginMenu();
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
      <button className='logout-a' onClick={this.clickLogOut}>LOG OUT</button>
    );
  }

  render() {
    const { showLogMenu, loggedUser } = this.props;
    if (showLogMenu) {
      return (
        <div className='login-menu'>
          <div className='triangle'></div>
          
          { loggedUser ? this.renderLogoutButt() : this.renderLoginButt()}
                    
        </div>
      );
    }
    return null;
  }
}

export default onClickOutside(LoginMenu);