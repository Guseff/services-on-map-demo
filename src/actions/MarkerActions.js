import { getPosition } from 'redux-effects-geolocation';
import {
  SHOW_MARKER,
} from '../constants/constants';

export function showMarker(value) {
  return dispatch =>
    dispatch({
      type: SHOW_MARKER,
      payload: value,
    });
}

export function getUserPosition() {
  return dispatch => dispatch(getPosition())
    .then(
      res => console.log(res.coords.latitude, res.coords.longitude),
    );
} 