import { getPosition } from 'redux-effects-geolocation';
import {
  GET_MARKERS,
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
  SHOW_MODAL,
  SHOW_ACCEPT,
  SHOW_APPROVE,
  CHANGE_NAME,
  CHANGE_TITLE,
  CHANGE_COST,
  CHANGE_TEXT,
  REG_NEW_TASK,
  ERR_NAME,
  ERR_TITLE,
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

export function showAcceptForm(marker) {
  if (marker.status === 1) {
    return dispatch =>
      dispatch({
        type: SHOW_ACCEPT,
        payload: true,
        clickedMarker: marker,
      });
  }
  return dispatch =>
    dispatch({
      type: SHOW_APPROVE,
      payload: true,
      clickedMarker: marker,
    });
}

export function closeModal() {
  return dispatch =>
    dispatch({
      type: SHOW_MODAL,
      payload: false,
    });
}

export function closeApprove() {
  return dispatch =>
    dispatch({
      type: SHOW_APPROVE,
      payload: false,
      clickedMarker: {},
    });
}

export function closeAccept() {
  return dispatch =>
    dispatch({
      type: SHOW_ACCEPT,
      payload: false,
      clickedMarker: {},
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
  return dispatch =>
    dispatch(createMarker(name, title, cost, text, coords))
      .then(() => dispatch(getMarkersList()))
      .then(() => dispatch(closeModal()));
}

// Accepting Task by Executor
export function acceptTask(name, phone, text, id) {
  const url = markersURL + id;
  const body = {
    name: name,
    phone: phone,
    text: text,
    status: 2,
  };

  console.log(url);
  return dispatch =>
    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(Object.keys(body).length ? { body: JSON.stringify(body) } : {}),
    })
      .then(() => dispatch(getMarkersList()))
      .then(() => dispatch(closeAccept()));
}

// Approving Task Executor  by Task Offer
export function approveTask(date, id) {
  const url = markersURL + id;
  const body = {
    app_date: date,
    status: 3,
  };

  console.log(url);
  return dispatch =>
    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(Object.keys(body).length ? { body: JSON.stringify(body) } : {}),
    })
      .then(() => dispatch(getMarkersList()))
      .then(() => dispatch(closeApprove()));
}