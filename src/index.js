import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';
import './index.css';

render(
  <Router>
    <Route exact path="/" component={App}>
      {/*<IndexRoute component={Home} />
      <Route path="article/:id" component={Article} />
      <Route path="about" component={About} />
      <Route path="login" component={Login} />*/}
    </Route>
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
