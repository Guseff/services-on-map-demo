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
