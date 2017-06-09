import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';
import About from './components/About';
import Header from './containers/Header';
import configureStore from './store/configureStore';
// import { showMarkers } from './actions/MarkerActions';

import './index.css';

const store = configureStore();

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
