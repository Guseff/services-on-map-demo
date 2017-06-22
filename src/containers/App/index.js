import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LMap from '../../containers/LMap';
import MapMenu from '../MapMenu';
import AcceptMenu from '../AcceptMenu';
import ApproveMenu from '../ApproveMenu';
import { clickOnMap, closeModal, closeAccept, closeApprove, showAcceptForm } from '../../actions/MarkerActions';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      markers, userCoords, clickCoords,
      clickOnMap, showModal, showAccept, showApprove, clickedMarker,
      closeModal, closeAccept, closeApprove, showAcceptForm,
    } = this.props;

    return (
      <div className="App">
        <LMap markers={markers} userCoords={userCoords} clickOnMap={clickOnMap}  showAcceptForm={showAcceptForm} />
        <MapMenu closeModal={closeModal} showModal={showModal} />
        <AcceptMenu closeAccept={closeAccept} showAccept={showAccept} clickedMarker={clickedMarker} />
        <ApproveMenu closeApprove={closeApprove} showApprove={showApprove} clickedMarker={clickedMarker} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers.markers,
    userCoords: state.map.userCoords,
    clickCoords: state.map.clickCoords,
    showModal: state.map.showModal,
    showAccept: state.map.showAccept,
    showApprove: state.map.showApprove,
    clickedMarker: state.map.clickedMarker,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickOnMap: bindActionCreators(clickOnMap, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch),
    closeAccept: bindActionCreators(closeAccept, dispatch),
    closeApprove: bindActionCreators(closeApprove, dispatch),
    showAcceptForm: bindActionCreators(showAcceptForm, dispatch),
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  userCoords: PropTypes.array.isRequired,
  clickCoords: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  showAccept: PropTypes.bool.isRequired,
  showApprove: PropTypes.bool.isRequired,
  clickedMarker: PropTypes.object.isRequired,

  clickOnMap: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeAccept: PropTypes.func.isRequired,
  showAcceptForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);