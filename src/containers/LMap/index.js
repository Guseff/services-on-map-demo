import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import LMarker from '../LMarker';

import './style.css';

class LMap extends Component {
  constructor() {
    super();

    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick() {
    this.props.onClickMenu();
  }

  render() {
    const position = this.props.userCoords;
    const markers = this.props.markers;
    return (
      <Map center={position} zoom={13} onClick={this.onMapClick}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map(
          (marker, index) =>
            <LMarker key={index} position={marker.coords} />
        )}
      </Map>
    );
  }
}

export default LMap;
