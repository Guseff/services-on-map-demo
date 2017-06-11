import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { getPosition } from 'redux-effects-geolocation';

import App from './containers/App';
import About from './components/About';
import Header from './containers/Header';
import configureStore from './store/configureStore';

import './index.css';

const store = configureStore();

store.dispatch(getPosition())
  .then(
    res => console.log(res.coords.latitude, res.coords.longitude),
  )

// store.dispatch(
//   showMarkers(),
// );

render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
