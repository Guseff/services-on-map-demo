import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LMap from '../../containers/LMap';
import MapMenu from '../MapMenu';
import AcceptMenu from '../AcceptMenu';
import ApproveMenu from '../ApproveMenu';
import NotLoginModal from '../../components/NotLoginModal';
import Footer from '../../components/Footer';
import {
  clickOnMap,
  closeModal,
  closeAccept,
  closeApprove,
  showAcceptForm,
  closeLoginMenu,
  closeNotLogin,
  showNotLogin,
} from '../../actions/MarkerActions';
import {
  logOutUser,
  loginUser,
} from '../../actions/LoginActions';

import './style.css';

class App extends Component {
  render() {
    const {
      markers, userCoords, loggedUser,
      clickOnMap, showModal, showAccept, showApprove, clickedMarker, showNotLoginMod,
      closeModal, closeAccept, closeApprove, showAcceptForm, closeNotLogin, showNotLogin, loginUser
    } = this.props;

    return (
      <div className="App">
        <LMap 
          markers={markers}
          userCoords={userCoords}
          loggedUser={loggedUser}
          clickOnMap={clickOnMap}
          closeLoginMenu={closeLoginMenu}
          showAcceptForm={showAcceptForm}
          showNotLogin={showNotLogin}
        />
        <MapMenu closeModal={closeModal} showModal={showModal} />
        <AcceptMenu closeAccept={closeAccept} showAccept={showAccept} clickedMarker={clickedMarker} />
        <ApproveMenu closeApprove={closeApprove} showApprove={showApprove} clickedMarker={clickedMarker} />
        <NotLoginModal closeNotLogin={closeNotLogin} showNotLoginMod={showNotLoginMod} loginUser={loginUser} />
        <Footer loggedUser={loggedUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers.markers,
    userCoords: state.map.userCoords,
    showModal: state.map.showModal,
    showAccept: state.map.showAccept,
    showApprove: state.map.showApprove,
    clickedMarker: state.map.clickedMarker,
    showLogMenu: state.login.showLogMenu,
    loggedUser: state.login.loggedUser,
    showNotLoginMod: state.map.showNotLoginMod,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickOnMap: bindActionCreators(clickOnMap, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch),
    closeAccept: bindActionCreators(closeAccept, dispatch),
    closeApprove: bindActionCreators(closeApprove, dispatch),
    showAcceptForm: bindActionCreators(showAcceptForm, dispatch),
    closeLoginMenu: bindActionCreators(closeLoginMenu, dispatch),
    logOutUser: bindActionCreators(logOutUser, dispatch),
    loginUser: bindActionCreators(loginUser, dispatch),
    closeNotLogin: bindActionCreators(closeNotLogin, dispatch),
    showNotLogin: bindActionCreators(showNotLogin, dispatch),
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  userCoords: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  showAccept: PropTypes.bool.isRequired,
  showApprove: PropTypes.bool.isRequired,
  showNotLoginMod: PropTypes.bool.isRequired,
  clickedMarker: PropTypes.object.isRequired,
  showLogMenu: PropTypes.bool.isRequired,
  loggedUser: PropTypes.object,

  clickOnMap: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeAccept: PropTypes.func.isRequired,
  showAcceptForm: PropTypes.func.isRequired,
  closeLoginMenu: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  closeNotLogin: PropTypes.func.isRequired,
  showNotLogin: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);