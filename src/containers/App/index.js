import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LMap from '../../containers/LMap';
import MapMenu from '../MapMenu';
import AcceptMenu from '../AcceptMenu';
import ApproveMenu from '../ApproveMenu';
import Footer from '../../components/Footer';
import LoginMenu from '../../components/LoginMenu';
import {
  clickOnMap,
  closeModal,
  closeAccept,
  closeApprove,
  showAcceptForm,
  showLoginMenu,
  closeLoginMenu,
  logOutUser,
} from '../../actions/MarkerActions';

import './style.css';

class App extends Component {
  render() {
    const {
      markers, userCoords,
      clickOnMap, showModal, showAccept, showApprove, clickedMarker, showLogMenu,
      closeModal, closeAccept, closeApprove, showAcceptForm, closeLoginMenu, logOutUser,
    } = this.props;

    return (
      <div className="App">
        <LMap markers={markers} userCoords={userCoords} clickOnMap={clickOnMap} closeLoginMenu={closeLoginMenu} showAcceptForm={showAcceptForm} />
        <MapMenu closeModal={closeModal} showModal={showModal} />
        <AcceptMenu closeAccept={closeAccept} showAccept={showAccept} clickedMarker={clickedMarker} />
        <ApproveMenu closeApprove={closeApprove} showApprove={showApprove} clickedMarker={clickedMarker} />
        <LoginMenu showLogMenu={showLogMenu} closeLoginMenu={closeLoginMenu} logOutUser={logOutUser} />
        <Footer />
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
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  userCoords: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  showAccept: PropTypes.bool.isRequired,
  showApprove: PropTypes.bool.isRequired,
  clickedMarker: PropTypes.object.isRequired,
  showLogMenu: PropTypes.bool.isRequired,

  clickOnMap: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeAccept: PropTypes.func.isRequired,
  showAcceptForm: PropTypes.func.isRequired,
  closeLoginMenu: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);