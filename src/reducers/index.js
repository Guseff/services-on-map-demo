import { combineReducers } from 'redux';

import markers from './markers.js';
import map from './map.js';
import form from './form.js';

export default combineReducers({
  markers,
  map,
  form,
});