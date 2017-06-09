import {
  SHOW_MARKER,
} from '../constants/constants';

const initialState = {
  markers: [
    [52.0929, 23.6931],
    [52.0829, 23.6931],
    [52.0929, 23.6831],
  ],
};

export default function markers(state = initialState, action) {
  switch (action.type) {

    case SHOW_MARKER:
      return { ...state };

    default:
      return state;
  }
}