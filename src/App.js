import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Container, Header } from './components/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Container />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
