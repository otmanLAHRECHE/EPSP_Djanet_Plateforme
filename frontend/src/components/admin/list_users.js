import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers, deleteUser } from '../../actions/users';

export class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state={
      users : [],
    }
  }




  async componentDidMount() {
    this.setState({users :await getUsers(localStorage.getItem("auth_token"))}) ;
     console.log("comp did mount");
    this.state.users.map((user) => (console.log(user.service)));
  }

  render() {
     console.log("list users render");
    return (
      <Fragment>
        <h2>Users</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Date of register</th>
              <th>Service</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((user) => (

              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.date_joined}</td>
                <td>{user.service}</td>
                <td>
                  <button
                    onClick={deleteUser(this, user.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </Fragment>
    );
  }
}



export default ListUsers;