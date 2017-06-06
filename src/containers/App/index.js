import React, { Component } from 'react';

import LMap from '../../containers/LMap';
import '../../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LMap />
      </div>
    );
  }
}

export default App;
