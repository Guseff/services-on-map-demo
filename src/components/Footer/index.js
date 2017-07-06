import React, { Component } from 'react';

import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span><img alt="" src="./marker-icon.png" />  - offer without accept</span>
        <span><img alt="" src="./marker-icon-green.png" />  - offer with accept</span>
        <span><img alt="" src="./marker-icon-gray.png" />  - your approved offer</span>
      </div>
    );
  }
}