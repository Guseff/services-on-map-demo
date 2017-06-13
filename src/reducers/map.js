import {
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
  SHOW_MODAL,
} from '../constants/constants';

const initialState = {
  userCoords: [0, 0],
  clickCoords: [],
  showModal: false,
};

export default function markers(state = initialState, action) {
  switch (action.type) {

    case GET_USER_COORDS:
      return { ...state, userCoords: action.payload };

    case PUT_CLICK_COORDS:
      return { ...state, clickCoords: action.payload };

    case SHOW_MODAL:
      return { ...state, showModal: action.payload };

    default:
      return state;
  }
}