import React, { Component } from 'react';
import { Popup } from 'react-leaflet';

class LPopup extends Component {
  constructor() {
    super();

  }

  render() {
    const title = this.props.title;
    const text = this.props.text;
    return (
      <Popup>
        Wau!
      </Popup>
    );
  }
}

export default LPopup;