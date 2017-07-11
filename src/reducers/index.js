import { combineReducers } from 'redux';

import markers from './markers.js';
import map from './map.js';
import login from './login.js';
import modals from './modals.js';

export default combineReducers({
  markers,
  map,
  login,
  modals,
});