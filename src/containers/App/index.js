import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LMap from '../../containers/LMap';
import '../../assets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { markers } = this.props;
    return (
      <div className="App">
        <LMap markers={markers} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers.markers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // logOut: bindActionCreators(LogRegActions.logOut, dispatch),
    // checkLogin: bindActionCreators(LogRegActions.checkLogin, dispatch),
  };
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);