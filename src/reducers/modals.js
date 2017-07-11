import {
  SHOW_MODAL,
  SHOW_ACCEPT,
  SHOW_APPROVE,
  SHOW_NOT_LOGIN,
} from '../constants/constants';

const initialState = {
  showModal_b: false,
  showAccept_b: false,
  showApprove_b: false,
  showNotLoginMod_b: false,
  showUserModal_b: false,
  clickedMarker: {},
};

export default function modals(state = initialState, action) {
  switch (action.type) {

    case SHOW_MODAL:
      return { ...state, showModal_b: action.payload };

    case SHOW_ACCEPT:
      return { ...state, showAccept_b: action.payload, clickedMarker: action.clickedMarker };

    case SHOW_APPROVE:
      return { ...state, showApprove_b: action.payload, clickedMarker: action.clickedMarker };

    case SHOW_NOT_LOGIN:
      return { ...state, showNotLoginMod_b: action.payload };
      
    default:
      return state;
  }
}