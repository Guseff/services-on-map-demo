import {
  SHOW_MARKER,
} from '../constants/constants';

const initialState = {
  markers: [],
  marker: {},
};

export default function markers(state = initialState, action) {
  switch (action.type) {

    case SHOW_MARKER:
      return { ...state, article: action.payload };

    default:
      return state;
  }
}