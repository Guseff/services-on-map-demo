import {
  GET_USER_COORDS,
  PUT_CLICK_COORDS,
  SHOW_MODAL,
  SHOW_ACCEPT,
  SHOW_APPROVE,
  SHOW_NOT_LOGIN,
} from '../constants/constants';

const initialState = {
  userCoords: [0, 0],
  clickCoords: [],
  showModal: false,
  showAccept: false,
  showApprove: false,
  showNotLoginMod: false,
  clickedMarker: {},
};

export default function map(state = initialState, action) {
  switch (action.type) {

    case GET_USER_COORDS:
      return { ...state, userCoords: action.payload };

    case PUT_CLICK_COORDS:
      return { ...state, clickCoords: action.payload };

    case SHOW_MODAL:
      return { ...state, showModal: action.payload };

    case SHOW_ACCEPT:
      return { ...state, showAccept: action.payload, clickedMarker: action.clickedMarker };

    case SHOW_APPROVE:
      return { ...state, showApprove: action.payload, clickedMarker: action.clickedMarker };

    case SHOW_NOT_LOGIN:
      return { ...state, showNotLoginMod: action.payload };
      
    default:
      return state;
  }
}