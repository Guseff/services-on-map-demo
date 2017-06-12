import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LMap from '../../containers/LMap';
import { onClickMenu } from '../../actions/MarkerActions'
import '../../assets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { markers, userCoords, onClickMenu } = this.props;
    return (
      <div className="App">
        <LMap markers={markers} userCoords={userCoords} onClickMenu={onClickMenu} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers.markers,
    userCoords: state.markers.userCoords,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickMenu: bindActionCreators(onClickMenu, dispatch),
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  userCoords: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);