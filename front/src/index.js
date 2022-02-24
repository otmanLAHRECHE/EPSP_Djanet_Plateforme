import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import {BrowserRouter, HashRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from "./components/common/private_route";
import {Dashboard} from "./components/admin/dashboard";
import Login from "./components/accounts/login";



class App extends Component {
  render() {
    console.log("render");
    return (

        <BrowserRouter>
            <Fragment>
              <div>
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

ReactDOM.render(<App />, document.getElementById('root'));