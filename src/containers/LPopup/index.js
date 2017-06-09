import React, { Component } from 'react';
import { Popup } from 'react-leaflet';

class LPopup extends Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    return (
      <Popup>
        {title}<br/>{text}
      </Popup>
    );
  }
}

export default LPopup;