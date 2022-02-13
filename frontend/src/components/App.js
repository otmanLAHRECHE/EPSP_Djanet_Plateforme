import React ,{ Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './layout/header';
import Dashboard from './admin/dashboard';
import Login from './accounts/login';
import PrivateRoute from './common/private_route';




class App extends Component {



  render() {
    console.log("render");
    return (
        <BrowserRouter>
            <Fragment>
              <div className="container">
                <Routes>
                  <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                  <Route exact path="/login" element={<Login/>} />
                </Routes>
              </div>
            </Fragment>
        </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));