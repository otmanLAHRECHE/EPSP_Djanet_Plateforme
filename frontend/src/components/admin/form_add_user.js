import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addNewUser } from '../../actions/users';

export class Form extends Component {
  state = {
    email: '',
    password: '',
    service: '',
  };

  onChange = (e) => this.setState({ [e.target.email]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password, service } = this.state;
    const user = { email, password, service };
    addNewUser(user,localStorage.getItem("auth_token"));
    this.setState({
      email: '',
      password: '',
      service: '',
    });
  };

  render() {
    const { email, password, service } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>service</label>
            <textarea
              className="form-control"
              type="text"
              name="service"
              onChange={this.onChange}
              value={service}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;