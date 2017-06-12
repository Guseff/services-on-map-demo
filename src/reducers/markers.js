import {
  GET_MARKERS,
  GET_USER_COORDS,
} from '../constants/constants';

const initialState = {
  markers: [],
  userCoords: [59.09, 23.7],
};

export default function markers(state = initialState, action) {
  switch (action.type) {

    case GET_MARKERS:
      return { ...state, markers: action.payload };

    case GET_USER_COORDS:
      return { ...state, userCoords: action.payload };

    default:
      return state;
  }
}