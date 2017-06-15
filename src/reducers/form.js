import {
  CHANGE_NAME,
  CHANGE_TITLE,
  CHANGE_COST,
  CHANGE_TEXT,
  REG_NEW_TASK,
  ERR_NAME,
  ERR_TITLE,
  ERR_COST,
} from '../constants/constants';

const initialState = {
  inpName: '',
  inpTitle: '',
  inpCost: 0,
  inpText: '',
  err: {
    name: false,
    title: false,
    cost: false,
  },
};

export default function form(state = initialState, action) {
  switch (action.type) {

    case CHANGE_NAME:
      return { ...state, inpName: action.payload, err: { ...state.err, name: false } };

    case ERR_NAME:
      return { ...state, err: { ...state.err, name: true } };

    case CHANGE_TITLE:
      return { ...state, inpTitle: action.payload, err: { ...state.err, title: false } };

    case ERR_TITLE:
      return { ...state, err: { ...state.err, title: true } };

    case CHANGE_TEXT:
      return { ...state, inpText: action.payload };

    case CHANGE_COST:
      return { ...state, inpCost: action.payload, err: { ...state.err, cost: false } };

    case ERR_COST:
      return { ...state, err: { ...state.err, cost: true } };

    default:
      return state;
  }
}