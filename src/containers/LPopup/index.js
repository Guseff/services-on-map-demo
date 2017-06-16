import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Popup } from 'react-leaflet';

class LPopup extends Component {
  render() {
    const { inpName, inpTitle, inpText } = this.props;
    return (
      <Popup>
        <div>
          <b>{inpTitle}</b><br/>{inpText}
        </div>
      </Popup>
    );
  }
}

function mapStateToProps(state) {
  return {
    inpName: state.form.inpName,
    inpTitle: state.form.inpTitle,
    inpText: state.form.inpText,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

LPopup.propTypes = {
  inpName: PropTypes.string.isRequired,
  inpTitle: PropTypes.string.isRequired,
  inpText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LPopup);