import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LMap from '../../containers/LMap';
import MapMenu from '../MapMenu';
import { clickOnMap } from '../../actions/MarkerActions'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { markers, userCoords, clickCoords, clickOnMap } = this.props;
    return (
      <div className="App">
        <LMap markers={markers} userCoords={userCoords} clickOnMap={clickOnMap} />
        {clickCoords.length ? <MapMenu/> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers.markers,
    userCoords: state.map.userCoords,
    clickCoords: state.map.clickCoords,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickOnMap: bindActionCreators(clickOnMap, dispatch),
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  userCoords: PropTypes.array.isRequired,
  clickCoords: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);