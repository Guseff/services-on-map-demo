import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { loginUser, showLoginMenu, closeLoginMenu } from '../../actions/MarkerActions';

import './style.css';

class Header extends Component {
  constructor() {
    super();

    this.photoClick = this.photoClick.bind(this);
  }

  photoClick() {
    this.props.showLoginMenu();
  }

  renderUserMenu() {
    if (Object.keys(this.props.loggedUser).length === 0) {
      return null;
    }
    return (
      <div className='user-photo'>
        <img alt='' title={'Logged as ' + this.props.loggedUser.ig} src={this.props.loggedUser.Paa} onClick={this.photoClick} />
      </div>
    );
  }

  renderLoginLI() {
    if (Object.keys(this.props.loggedUser).length === 0) {
      return (
        <li><a href='#' onClick={this.photoClick} >{'Log In'}</a></li>
      );
    }
    return null;
  }

  render() {
    const logYes = (Object.keys(this.props.loggedUser).length === 0) ? false : true;
    return (
      <div className="head">
        <div className="logo">
          Welcome to Brest service offer App
        </div>

        {this.renderUserMenu()}
        
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {this.renderLoginLI()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedUser: state.login.loggedUser,
    showLogMenu: state.login.showLogMenu,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
    showLoginMenu: bindActionCreators(showLoginMenu, dispatch),
    closeLoginMenu: bindActionCreators(closeLoginMenu, dispatch),
  };
}

Header.propTypes = {
  loggedUser: PropTypes.object.isRequired,
  showLogMenu: PropTypes.bool.isRequired,

  loginUser: PropTypes.func.isRequired,
  showLoginMenu: PropTypes.func.isRequired,
  closeLoginMenu: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
