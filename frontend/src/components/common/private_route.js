import React from 'react';
import { Route, Navigate,Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from "../admin/dashboard";

function PrivateRoute({ children, auth}){

    if (auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
      } else {
        return children;
      }
}





const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);