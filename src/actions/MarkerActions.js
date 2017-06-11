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
  return dispatch => dispatch(getPosition({ enableHighAccuracy: true }    ))
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

export function createMarker(title, author, text, coords) {
  const param =  'http://localhost:3000/markers/';
  const body = {
    title: title,
    author: author,
    text: text,
    coords: coords,
  };

  return dispatch =>
    fetch(param, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(Object.keys(body).length ? { body: JSON.stringify(body) } : {}),
    });
}