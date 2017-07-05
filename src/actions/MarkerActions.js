import { getPosition } from 'redux-effects-geolocation';
import {
  GET_MARKERS,
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
  SHOW_MODAL,
  SHOW_ACCEPT,
  SHOW_APPROVE,
  SHOW_LOG_MENU,
  SHOW_NOT_LOGIN,
} from '../constants/constants';

const markersURL = 'http://localhost:3001/markers/';
const usersURL = 'http://localhost:3001/users/';

export function getUserPosition() {
  return dispatch => dispatch(getPosition({ enableHighAccuracy: true } ))
    .then(
      (res) => {
        dispatch({
          type: GET_USER_COORDS,
          payload: [res.coords.latitude, res.coords.longitude],
        });
      }
    )
    .catch(() => {
      dispatch({
        type: GET_USER_COORDS,
        payload: [52.086276, 23.681814],
      });
    });
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

export function createMarker(id, name, title, cost, text, coords) {
  const param =  markersURL;
  const body = {
    author_id: id,
    name: name,
    title: title,
    cost: cost,
    text: text,
    coords: coords,
  };
console.log(body.author_id);
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



export function changePhoneNumber(id, num) {
  console.log('changePhoneNumber');
  const url = usersURL + id;
  const body = {phone: num};

  return dispatch =>
    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(Object.keys(body).length ? { body: JSON.stringify(body) } : {}),
    });
}

export function regNewTask(id, name, title, cost, text, coords) {
  return dispatch =>
    dispatch(createMarker(id, name, title, cost, text, coords))
      .then(() => dispatch(getMarkersList()))
      .then(() => dispatch(closeModal()));
}

// Accepting Task by Executor
export function acceptTask(exec_id, name, phone, text, id) {
  const url = markersURL + id;
  const body = {
    exec_id: exec_id,
    executor: name,
    exec_phone: phone,
    exec_text: text,
    status: 2,
  };

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
    approve_date: Date.now(),
    status: 3,
  };

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

export function showLoginMenu() {
  return dispatch =>
    dispatch({
      type: SHOW_LOG_MENU,
      payload: true,
    });
}

export function closeLoginMenu() {
  return dispatch =>
    dispatch({
      type: SHOW_LOG_MENU,
      payload: false,
    });
}

export function showNotLogin() {
  return dispatch =>
    dispatch({
      type: SHOW_NOT_LOGIN,
      payload: true,
    });
}

export function closeNotLogin() {
  return dispatch =>
    dispatch({
      type: SHOW_NOT_LOGIN,
      payload: false,
    });
}