import {
  SHOW_MODAL,
  SHOW_ACCEPT,
  SHOW_APPROVE,
  SHOW_NOT_LOGIN,
} from '../constants/constants';

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