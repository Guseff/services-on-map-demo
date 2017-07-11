import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LMap from '../../containers/LMap';
import NewMarkerMenu from '../../components/modals/NewMarkerMenu';
import AcceptMenu from '../../components/modals/AcceptMenu';
import ApproveMenu from '../../components/modals/ApproveMenu';
import NotLoginModal from '../../components/modals/NotLoginModal';
import ShowUserModal from '../../components/modals/ShowUserModal';
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
      markers, userCoords, loggedUser, clickedMarker, clickOnMap, 
      showModal_b, showAccept_b, showApprove_b, showNotLoginMod_b,
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
        <NewMarkerMenu closeModal={closeModal} showModal_b={showModal_b} />
        <AcceptMenu closeAccept={closeAccept} showAccept_b={showAccept_b} clickedMarker={clickedMarker} />
        <ApproveMenu closeApprove={closeApprove} showApprove_b={showApprove_b} clickedMarker={clickedMarker} />
        <NotLoginModal closeNotLogin={closeNotLogin} showNotLoginMod_b={showNotLoginMod_b} loginUser={loginUser} />
        <Footer loggedUser={loggedUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers.markers,
    userCoords: state.map.userCoords,
    showModal_b: state.modals.showModal_b,
    showAccept_b: state.modals.showAccept_b,
    showApprove_b: state.modals.showApprove_b,
    clickedMarker: state.modals.clickedMarker,
    showLogMenu: state.login.showLogMenu,
    loggedUser: state.login.loggedUser,
    showNotLoginMod_b: state.modals.showNotLoginMod_b,
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
  showModal_b: PropTypes.bool.isRequired,
  showAccept_b: PropTypes.bool.isRequired,
  showApprove_b: PropTypes.bool.isRequired,
  showNotLoginMod_b: PropTypes.bool.isRequired,
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