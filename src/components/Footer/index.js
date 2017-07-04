import React, { Component } from 'react';

import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p><img alt="" src="./marker-icon.png" />  - offer without accept</p>
        <p><img alt="" src="./marker-icon-green.png" />  - offer with accept</p>
      </div>
    );
  }
}