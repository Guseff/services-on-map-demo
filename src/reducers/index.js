import { combineReducers } from 'redux';

import markers from './markers';
import map from './map.js';

export default combineReducers({
  markers,
  map,
});