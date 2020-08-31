import React, {Component} from 'react';

import Register from './Register';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Register />
        <Login />
      </div>
    );
  }
}

export default App;
