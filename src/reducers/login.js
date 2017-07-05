import {
  USER_LOGIN,
  SHOW_LOG_MENU,
} from '../constants/constants';

const initialState = {
  loggedUser: null,
  showLogMenu: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case USER_LOGIN: 
      return { ...state, loggedUser: action.payload };

    case SHOW_LOG_MENU:
      return { ...state, showLogMenu: action.payload };

    default:
      return state;
  }
}