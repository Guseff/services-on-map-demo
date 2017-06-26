import {
  USER_LOGIN,
} from '../constants/constants';

const initialState = {
  loggedUser: {},
};

export default function map(state = initialState, action) {
  switch (action.type) {

    case USER_LOGIN:
      return { ...state, loggedUser: action.payload };

    default:
      return state;
  }
}