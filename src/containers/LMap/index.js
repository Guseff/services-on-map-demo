import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import LMarker from '../LMarker';

import './style.css';

class LMap extends Component {
  constructor() {
    super();
    // this.state = {
    //   lat: 52.0929,
    //   lng: 23.6931,
    //   zoom: 15,
    // };
  }

  render() {
    const position = this.props.userCoords;
    const markers = this.props.markers;
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map(
          (marker, index) =>
            <LMarker key={index} position={marker} />
        )}
        <LMarker position={position} />
      </Map>
    );
  }
}

export default LMap;
