import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import LMarker from '../LMarker';

import './style.css';

class LMap extends Component {
  constructor() {
    super();

    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(e) {
    this.props.clickOnMap(e.latlng);
  }

  render() {
    const position = this.props.userCoords;
    const markers = this.props.markers;
    const menuPosition = this.props.menuPosition;
    const showAccept = this.props.showAccept;
    const showAcceptForm = this.props.showAcceptForm;

    return (
      <Map center={position} zoom={13} onClick={this.onMapClick}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map(
          (marker, index) =>
            (marker.status === 3) ?
            null :
            <LMarker key={index} marker={marker} showAccept={showAccept} showAcceptForm={showAcceptForm} />
        )}
      </Map>
    );
  }
}

export default LMap;
