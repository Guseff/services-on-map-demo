import React, { Component } from 'react';

import './style.css';

class LoginMenu extends Component {
  constructor() {
    super();

    this.handleClose = this.handleClose.bind(this);
    this.clickLogOut = this.clickLogOut.bind(this);
  }

  handleClose() {
    this.props.closeLoginMenu();
  }

  clickLogOut() {
    this.props.logOutUser();
    this.props.closeLoginMenu();
  }

  render() {
    const { showLogMenu } = this.props;
    if (showLogMenu) {
      return (
        <div className='login-menu'>
          <div className='triangle'></div>
          <a href='#' className='logout-a' onClick={this.clickLogOut}>LOG OUT</a>
        </div>
      );
    }
    return null;
  }
}

export default LoginMenu;