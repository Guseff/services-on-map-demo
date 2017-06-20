import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import geoMiddleware from 'redux-effects-geolocation';
import rootReducer from '../reducers';

const nextRootReducer = require('../reducers');

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        geoMiddleware()
      )
    ),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}