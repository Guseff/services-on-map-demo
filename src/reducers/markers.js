import {
  SHOW_MARKER,
  GET_USER_COORDS,
} from '../constants/constants';

const initialState = {
  markers: [
    [52.0929, 23.6931],
    [52.0909, 23.6931],
    [52.0929, 23.6901],
  ],
  userCoords: [59.09, 23.7],
};

export default function markers(state = initialState, action) {
  switch (action.type) {

    case SHOW_MARKER:
      return { ...state };

    case GET_USER_COORDS:
      console.log('qqqqqq');
      return { ...state, userCoords: action.payload }

    default:
      return state;
  }
}