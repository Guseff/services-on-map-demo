import {
  GET_MARKERS,
  GET_USER_COORDS,
} from '../constants/constants';

const initialState = {
  markers: [],
  menuPosition: [52.1547676671373, 23.6858367919922],
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