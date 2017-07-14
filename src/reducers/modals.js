import {
  SHOW_MODAL,
  SHOW_ACCEPT,
  SHOW_APPROVE,
  SHOW_NOT_LOGIN,
  SHOW_USER_MODAL,
  EDIT_USER_MODAL,
  FIND_OFFERER,
  ERASE_OFFERER,
} from '../constants/constants';

const initialState = {
  showModal_b: false,
  showAccept_b: false,
  showApprove_b: false,
  showNotLoginMod_b: false,
  showUserModal_b: false,
  editUserModal_b: false,
  clickedMarker: {},
  seeUser: null,
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

    case SHOW_USER_MODAL:
      return { ...state, showUserModal_b: action.payload };

    case EDIT_USER_MODAL:
      return { ...state, editUserModal_b: action.payload };

    case FIND_OFFERER:
      return { ...state, seeUser: action.payload };

    case ERASE_OFFERER:
      return { ...state, seeUser: null };

    default:
      return state;
  }
}