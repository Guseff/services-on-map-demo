import { getPosition } from 'redux-effects-geolocation';
import {
  SHOW_MARKER,
  GET_USER_COORDS,
} from '../constants/constants';

export function showMarker(value) {
  return dispatch =>
    dispatch({
      type: SHOW_MARKER,
      payload: value,
    });
}

export function getUserPosition() {
  return dispatch => dispatch(getPosition({ enableHighAccuracy: true }))
    // .then(
    //   res => console.log(res.coords.latitude, res.coords.longitude),
    // )
    .then(
      (res) => {
        console.log(res.coords.latitude);
        dispatch({
          type: GET_USER_COORDS,
          payload: [res.coords.latitude, res.coords.longitude],
        });
      }
    )
} 