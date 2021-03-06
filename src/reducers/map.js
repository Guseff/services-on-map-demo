import {
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
} from '../constants/constants';

const initialState = {
  userCoords: [0, 0],
  clickCoords: [],
};

export default function map(state = initialState, action) {
  switch (action.type) {

    case GET_USER_COORDS:
      return { ...state, userCoords: action.payload };

    case PUT_CLICK_COORDS:
      return { ...state, clickCoords: action.payload };
      
    default:
      return state;
  }
}