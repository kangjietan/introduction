import React, { Component } from 'react';

import GlobalStyle from '../theme/GlobalStyle';

import NavigationBar from './NavigationBar';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <NavigationBar />
        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
