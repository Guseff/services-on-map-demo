import {
  SHOW_MODAL,
  SHOW_ACCEPT,
  SHOW_APPROVE,
  SHOW_NOT_LOGIN,
  SHOW_USER_MODAL,
  EDIT_USER_MODAL,
} from '../constants/constants';

// modal for click on map (not on Marker)
export function showModal() {
  return dispatch =>
    dispatch({
      type: SHOW_MODAL,
      payload: true,
    });
}
// modal for click on marker
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

// modal for final approving 
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

// not login user message modal
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

// modal for user information
export function showUserModal() {
  return dispatch =>
    dispatch({
      type: SHOW_USER_MODAL,
      payload: true,
    });
}
export function closeUserModal() {
  return dispatch =>
    dispatch({
      type: SHOW_USER_MODAL,
      payload: false,
    });
}

export function showEditUser() {
  return dispatch =>
    dispatch({
      type: EDIT_USER_MODAL,
      payload: true,
    });
}

export function closeEditUser() {
  return dispatch =>
    dispatch({
      type: EDIT_USER_MODAL,
      payload: false,
    });
}