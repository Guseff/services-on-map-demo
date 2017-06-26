import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import './style.css';

class Header extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div className="head">
        <div className="logo">
          Welcome to Brest service offer App
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <GoogleLogin
                clientId="732274642447-e5u8prip22va80rc4rou5tus04s3ecak.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
