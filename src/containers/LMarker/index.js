import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';

import LPopup from '../LPopup';

class LMarker extends Component {
  constructor() {
    super();

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick() {
    console.log('Marker clicked');
    this.props.showAcceptForm();
  }

  render() {
    const { marker } = this.props;
    return (
      <Marker position={marker.coords} onClick={this.onMarkerClick}>
        <Tooltip >
          <span>
            <b>{marker.title}</b><br/>
            {marker.text}<br/>
            Cost ${marker.cost}
          </span>
        </Tooltip>
      </Marker>
    );
  }
}

export default LMarker;