import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoginMenu from '../../components/LoginMenu';
import {
  showLoginMenu,
  closeLoginMenu,
} from '../../actions/MarkerActions';
import {
  checkLogin,
  logOutUser,
  loginUser, 
} from '../../actions/LoginActions';
import {
  showUserModal,
} from '../../actions/ModalActions';

import './style.css';

class Header extends Component {
  constructor() {
    super();

    this.photoClick = this.photoClick.bind(this);
  }

  componentDidMount() {
    this.props.checkLogin(localStorage.getItem('token'));
  }

  photoClick() {
    this.props.showLoginMenu();
  }

  renderUserMenu() {
    if (!this.props.loggedUser) {
      return null;
    }
    return (
      <div className='user-photo'>
        <img alt='' title={`Logged as ${this.props.loggedUser.name}`} src={this.props.loggedUser.photoURL} onClick={this.photoClick} />
      </div>
    );
  }

  renderLoginLI() {
    if (!this.props.loggedUser) {
      return (
        <li>
          <button href='#' onClick={this.photoClick}>
            Log In
          </button>
        </li>
      );
    }
    return null;
  }

  render() {
    const {
      showLogMenu, loggedUser,
      closeLoginMenu, logOutUser, loginUser, showUserModal,
    } = this.props;
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
        <LoginMenu 
          loggedUser={loggedUser}
          showLogMenu={showLogMenu} 
          closeLoginMenu={closeLoginMenu} 
          logOutUser={logOutUser} 
          loginUser={loginUser} 
          showUserModal={showUserModal}
        />
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
    logOutUser: bindActionCreators(logOutUser, dispatch),
    checkLogin: bindActionCreators(checkLogin, dispatch),
    showUserModal: bindActionCreators(showUserModal, dispatch),
  };
}

Header.propTypes = {
  loggedUser: PropTypes.object,
  showLogMenu: PropTypes.bool.isRequired,

  loginUser: PropTypes.func.isRequired,
  showLoginMenu: PropTypes.func.isRequired,
  closeLoginMenu: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  checkLogin: PropTypes.func.isRequired,
  showUserModal: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
