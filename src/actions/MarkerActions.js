import { getPosition } from 'redux-effects-geolocation';
import {
  GET_MARKERS,
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
  SHOW_MODAL,
  SHOW_ACCEPT,
  CHANGE_NAME,
  CHANGE_TITLE,
  CHANGE_COST,
  CHANGE_TEXT,
  REG_NEW_TASK,
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

export function createMarker(name, title, cost, text, coords) {
  const param =  markersURL;
  const body = {
    name: name,
    title: title,
    cost: cost,
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

export function putClickCoords(param) {
  const coords = [param.lat, param.lng];
  return dispatch =>
    dispatch({
      type: PUT_CLICK_COORDS,
      payload: coords,
    });
}

export function showModal() {
  return dispatch =>
    dispatch({
      type: SHOW_MODAL,
      payload: true,
    });
}

export function showAcceptForm() {
  console.log('Open!');
  return dispatch =>
    dispatch({
      type: SHOW_ACCEPT,
      payload: true,
    });
}

export function closeModal() {
  return dispatch =>
    dispatch({
      type: SHOW_MODAL,
      payload: false,
    });
}

export function closeAccept() {
  console.log('Close!');
  return dispatch =>
    dispatch({
      type: SHOW_ACCEPT,
      payload: false,
    });
}

export function clickOnMap(param) {
  return dispatch => {
    dispatch(putClickCoords(param));
    dispatch(showModal());
  };
}

export function changeName(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_NAME,
      payload: value,
    });
}

export function changeTitle(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_TITLE,
      payload: value,
    });
}

export function changeCost(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_COST,
      payload: value,
    });
}

export function changeText(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_TEXT,
      payload: value,
    });
}

export function regNewTask(name, title, cost, text, coords) {

// TODO: checking fields for appropriate conditions !!!

  // if (a.length < 3) {
  //   return dispatch =>
  //     dispatch({
  //       type: ERR_REG_NAME,
  //     });
  // }
  // if (b.length < 3 || b.indexOf('@') < 2 || b.indexOf('.') < 1) {
  //   return dispatch =>
  //     dispatch({
  //       type: ERR_REG_EMAIL,
  //     });
  // }
  // if (c.length < 3) {
  //   return dispatch =>
  //     dispatch({
  //       type: ERR_REG_PASS,
  //     });
  // }

  return dispatch =>
    dispatch(createMarker(name, title, cost, text, coords))
      .then(() => dispatch(getMarkersList()))
      .then(() => dispatch(changeName('')))
      .then(() => dispatch(changeTitle('')))
      .then(() => dispatch(changeCost('')))
      .then(() => dispatch(changeText('')));
}