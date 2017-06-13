import { getPosition } from 'redux-effects-geolocation';
import {
  GET_MARKERS,
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
} from '../constants/constants';

const markersURL =  'http://localhost:3001/markers/';

export function getUserPosition() {
  return dispatch => dispatch(getPosition({ enableHighAccuracy: true }    ))
    .then(
      (res) => {
        dispatch({
          type: GET_USER_COORDS,
          payload: [res.coords.latitude, res.coords.longitude],
        });
      }
    )
}

export function getMarkersList() {
  const param = markersURL;
  return dispatch =>
    fetch(param)
      .then(resp => resp.json())
      .then(resp => {
        dispatch({
          type: GET_MARKERS,
          payload: resp,
        });
      });
}

export function createMarker(title, author, text, coords) {
  const param =  markersURL;
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

export function clickOnMap(param) {
  const coords = [param.lat, param.lng];
  return dispatch =>
    dispatch(createMarker('f', 'j', 'h', coords))
      .then(() => dispatch(getMarkersList()))
      .then(() => dispatch({
        type: PUT_CLICK_COORDS,
        payload: coords,
      }));
}