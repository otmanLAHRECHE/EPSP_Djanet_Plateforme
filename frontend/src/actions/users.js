import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_USER, DELETE_USER, ADD_NEW_USER } from './types';


export const getUsers = () => (dispatch, getState) => {
  axios
    .get('/EPSP_Djanet_Plateforme/users_list/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};


export const deleteUser = (id) => (dispatch, getState) => {
  axios
    .delete(`/EPSP_Djanet_Plateforme/delete_user/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};


export const addNewUser = (lead) => (dispatch, getState) => {
  axios
    .post('/api/leads/', lead, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLead: 'User Added' }));
      dispatch({
        type: ADD_NEW_USER,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};