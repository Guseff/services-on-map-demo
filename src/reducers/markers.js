import {
  GET_MARKERS,
} from '../constants/constants';

const initialState = {
  markers: [],
};

export default function markers(state = initialState, action) {
  switch (action.type) {

    case GET_MARKERS:
      return { ...state, markers: action.payload };

    default:
      return state;
  }
}