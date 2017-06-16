import {
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
  SHOW_MODAL,
  SHOW_ACCEPT,
} from '../constants/constants';

const initialState = {
  userCoords: [0, 0],
  clickCoords: [],
  showModal: false,
  showAccept: false,
};

export default function map(state = initialState, action) {
  switch (action.type) {

    case GET_USER_COORDS:
      return { ...state, userCoords: action.payload };

    case PUT_CLICK_COORDS:
      return { ...state, clickCoords: action.payload };

    case SHOW_MODAL:
      console.log('State modal!');
      return { ...state, showModal: action.payload };

    case SHOW_ACCEPT:
      console.log('State accept!');
      return { ...state, showAccept: action.payload };

    default:
      return state;
  }
}