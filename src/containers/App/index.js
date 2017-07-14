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
import EditUserModal from '../../components/modals/EditUserModal';
import Footer from '../../components/Footer';
import {
  clickOnMap,
  closeLoginMenu,
} from '../../actions/MarkerActions';
import {
  showAcceptForm,
  showNotLogin,
  showUserModal,
  showEditUser,
  closeModal,
  closeAccept,
  closeApprove,
  closeNotLogin,
  closeUserModal,
  closeEditUser,
  eraseOfferer,
} from '../../actions/ModalActions';
import {
  logOutUser,
  loginUser,
} from '../../actions/LoginActions';

import './style.css';

class App extends Component {
  render() {
    const {
      markers, userCoords, loggedUser, clickedMarker, clickOnMap, 
      showModal_b, showAccept_b, showApprove_b, showNotLoginMod_b, showUserModal_b, editUserModal_b,
      closeModal, closeAccept, closeApprove, showAcceptForm, closeNotLogin, showNotLogin, loginUser, seeUser,
      showUserModal, closeUserModal, closeEditUser, eraseOfferer,
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
        <ShowUserModal showUserModal_b={showUserModal_b} closeUserModal={closeUserModal} seeUser={seeUser} eraseOfferer={eraseOfferer} />
        <EditUserModal editUserModal_b={editUserModal_b} closeEditUser={closeEditUser} loggedUser={loggedUser} />
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
    showUserModal_b: state.modals.showUserModal_b,
    editUserModal_b: state.modals.editUserModal_b,
    seeUser: state.modals.seeUser,
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
    showUserModal: bindActionCreators(showUserModal, dispatch),
    closeUserModal: bindActionCreators(closeUserModal, dispatch),
    closeEditUser: bindActionCreators(closeEditUser, dispatch),
    eraseOfferer: bindActionCreators(eraseOfferer, dispatch),
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  userCoords: PropTypes.array.isRequired,
  showModal_b: PropTypes.bool.isRequired,
  showAccept_b: PropTypes.bool.isRequired,
  showApprove_b: PropTypes.bool.isRequired,
  showNotLoginMod_b: PropTypes.bool.isRequired,
  showUserModal_b: PropTypes.bool.isRequired,
  clickedMarker: PropTypes.object.isRequired,
  showLogMenu: PropTypes.bool.isRequired,
  loggedUser: PropTypes.object,
  seeUser: PropTypes.object,

  clickOnMap: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeAccept: PropTypes.func.isRequired,
  showAcceptForm: PropTypes.func.isRequired,
  closeLoginMenu: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  closeNotLogin: PropTypes.func.isRequired,
  showNotLogin: PropTypes.func.isRequired,
  closeUserModal: PropTypes.func.isRequired,
  showUserModal: PropTypes.func.isRequired,
  closeEditUser: PropTypes.func.isRequired,
  eraseOfferer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);