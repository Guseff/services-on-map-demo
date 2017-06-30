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
    if (Object.keys(this.props.loggedUser).length !== 0) {
      this.props.closeLoginMenu();
      this.props.clickOnMap(e.latlng);
      return;
    }
    this.props.showNotLogin();
  }

  render() {
    const position = this.props.userCoords;
    const { markers, showAccept, showAcceptForm } = this.props;

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
