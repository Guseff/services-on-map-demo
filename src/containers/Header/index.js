import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import '../../assets/App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to React</h3>
      </div>
    );
  }
}

export default Header;
