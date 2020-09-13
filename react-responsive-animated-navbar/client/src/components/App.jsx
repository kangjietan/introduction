import React, {Component} from 'react';

import GlobalStyle from '../theme/GlobalStyle';
import Navbar from './Navbar';

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
        <Navbar />
      </div>
    );
  }
}

export default App;
