import React, { Component } from 'react';

import axios from 'axios';

import qs from 'qs';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: [],
      registered: false,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormRegistration = this.handleFormRegistration.bind(this);
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  createAccount() {
    const { username, password, password2 } = this.state;

    let errorList = [];

    if (!username || !password || !password2) {
      errorList.push({ msg: "All fields must be filled out" });
    }

    if (password !== password2) {
      errorList.push({ msg: "Passwords do not match" });
    }

    if (password.length < 6) {
      errorList.push({ msg: "Password should be at least 6 characters long" });
    }

    if (errorList.length > 0) {
      this.setState({ errors: errorList });
    } else {
      axios.post('/register', qs.stringify(this.state))
        .then((response) => {
          console.log('Response', response);
          if (response.data.errors) {
            this.setState({ errors: response.data.errors })
          } else {
            console.log(response.data.success);
            if (response.data.success) this.setState({ registered: true });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleFormRegistration(e) {
    e.preventDefault();
    this.setState({ errors: [] }, this.createAccount);
  }

  render() {
    const { username, password, password2, errors, registered } = this.state;
    let displayErrors = errors.map(error => <div>{error.msg}</div>);

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Register</h1>
        <div style={{ border: "1px solid black" }}>
          <div style={{ display: registered ? "block" : "none" }}>You are now registered</div>
          {displayErrors ? displayErrors : null}
        </div>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={this.handleFormRegistration}>
          <label htmlFor="username">Username</label>
          <input type="name" name="username" placeholder="Create username" required="required" value={username} onChange={this.handleFormChange} />
          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="Create password" required="required" value={password} onChange={this.handleFormChange} />
          <label htmlFor="password2">password2</label>
          <input type="password" name="password2" placeholder="Confirm password" required="required" value={password2} onChange={this.handleFormChange} />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
