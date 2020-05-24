import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from './nav/Navbar';
import Routes from './routes';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
        <Container style={{height: "70vh"}}>
          <Routes></Routes>
        </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default App;
