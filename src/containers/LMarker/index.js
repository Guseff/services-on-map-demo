import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';

class LMarker extends Component {
  constructor() {
    super();

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick() {
    if (this.props.loggedUser) {
      this.props.showAcceptForm(this.props.marker);
      return;
    }
    this.props.showNotLogin();
  }

  getMarkerColor(status) {
    if (status === 2) return '-green';
    if (status === 3) return '-red';

    return '';
  }

  render() {
    const { marker } = this.props;
    const iconPath = `./marker-icon${this.getMarkerColor(marker.status)}.png`;
    const colorIcon = new Icon({
      iconUrl: iconPath,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
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