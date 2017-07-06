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
    if (this.props.loggedUser) {
      this.props.closeLoginMenu();
      this.props.clickOnMap(e.latlng);
      return;
    }
    this.props.showNotLogin();
  }

  render() {
    const position = this.props.userCoords;
    const { markers, showAccept, showAcceptForm, showNotLogin, loggedUser } = this.props;

    return (
      <Map center={position} zoom={13} onClick={this.onMapClick}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map(
          (marker, index) => {
            if (marker.status !==3 || (!!loggedUser && loggedUser._id === marker.author_id)) {
              return ( 
                <LMarker 
                  key={index}
                  marker={marker}
                  showAccept={showAccept}
                  showAcceptForm={showAcceptForm}
                  showNotLogin={showNotLogin} 
                  loggedUser={loggedUser}
                />
              )
            } 
            return null;
          }
        )}
      </Map>
    );
  }
}

export default LMap;
