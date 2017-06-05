import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import '../../assets/App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h3>Welcome to App</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
      </ul>
      </div>
    );
  }
}

export default Header;
