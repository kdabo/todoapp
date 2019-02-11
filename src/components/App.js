import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';

class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
