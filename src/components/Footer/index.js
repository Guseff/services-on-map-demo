import React, { Component } from 'react';

import './style.css';

export default class Footer extends Component {
  renderGreyMarker(loggedUser) {
    if (loggedUser) {
      return (
        <span><img alt="" src="./marker-icon-gray.png" />  - your approved offer</span>
      );
    }
    return null;
  }
  
  render() {
    return (
      <div className="footer">
        <span><img alt="" src="./marker-icon.png" />  - offer without accept</span>
        <span><img alt="" src="./marker-icon-green.png" />  - offer with accept</span>
        {this.renderGreyMarker(this.props.loggedUser)}
      </div>
    );
  }
}