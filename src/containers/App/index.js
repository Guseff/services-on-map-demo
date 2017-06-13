import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LMap from '../../containers/LMap';
import MapMenu from '../MapMenu';
import { clickOnMap, closeModal } from '../../actions/MarkerActions'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { markers, userCoords, clickCoords, clickOnMap, showModal, closeModal } = this.props;
    return (
      <div className="App">
        <LMap markers={markers} userCoords={userCoords} clickOnMap={clickOnMap} />
        <MapMenu closeModal={closeModal} showModal={showModal} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers.markers,
    userCoords: state.map.userCoords,
    clickCoords: state.map.clickCoords,
    closeModal: state.map.closeModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickOnMap: bindActionCreators(clickOnMap, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch),
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  userCoords: PropTypes.array.isRequired,
  clickCoords: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,

  clickOnMap: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);