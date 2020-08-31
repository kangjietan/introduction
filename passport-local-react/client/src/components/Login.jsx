import React, { Component } from 'react';

import axios from 'axios';

import qs from 'qs';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: [],
      success: [],
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.testUserAuth = this.testUserAuth.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmission(event) {
    event.preventDefault();

    axios.post('/login', qs.stringify(this.state))
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  logOut() {
    axios.get('/logout')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

  testUserAuth() {
    axios.get('/auth');
  }

  render() {
    const { username, password } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Login</h1>
        <form style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }} onSubmit={this.handleFormSubmission}>
          <label htmlFor="username">Username</label>
          <input type="name" name="username" placeholder="Enter username" value={username} onChange={this.handleFormChange} />
          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="Enter password" value={password} onChange={this.handleFormChange} />
          <input type="submit" value="Login" />
        </form>
        <button onClick={this.logOut}>Logout</button>
        {/* <button onClick={this.testUserAuth}>Test</button> */}
        <a href="/auth">
          <button>Test Auth</button>
        </a>
      </div>
    );
  }
}

export default Login;
