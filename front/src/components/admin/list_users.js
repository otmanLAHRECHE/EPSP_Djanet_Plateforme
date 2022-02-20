import React, { Component, Fragment } from 'react';
import { getUsers, deleteUser } from '../../actions/users';



export class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state={
      users : [],
    }
  }




  async componentDidMount() {
    console.log("comp did mount");
    this.setState({users :await getUsers(localStorage.getItem("auth_token"))}) ;
    console.log("get state");
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
                    //onClick={deleteUser(user.id,this.state.token)}
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