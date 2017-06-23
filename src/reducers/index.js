import { combineReducers } from 'redux';

import markers from './markers.js';
import map from './map.js';

export default combineReducers({
  markers,
  map,
});