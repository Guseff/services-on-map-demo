import React, { Component } from 'react';
import { Marker } from 'react-leaflet';
import LPopup from '../LPopup';

class LMarker extends Component {
  constructor() {
    super();

  }

  render() {
    const position = this.props.position;
    return (
      <Marker position={position}>
        <LPopup title={'Wau!'} text={'bla-bla-bla'} />
      </Marker>
    );
  }
}

export default LMarker;