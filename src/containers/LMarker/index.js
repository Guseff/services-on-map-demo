import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';

import LPopup from '../LPopup';

class LMarker extends Component {
  constructor() {
    super();

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick() {
    this.props.showAcceptForm(this.props.marker);
  }

  render() {
    const { marker } = this.props;
    const iconPath = './marker-icon' + 
      ((marker.status === 2) ? '-green' : ((marker.status === 3) ? '-red' : ''))
      + '.png';
    const colorIcon = new Icon({iconUrl: iconPath});
    return (
      <Marker position={marker.coords} icon={colorIcon} onClick={this.onMarkerClick}>
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