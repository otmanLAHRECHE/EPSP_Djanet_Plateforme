import React, { Fragment } from 'react';
import Form_add_user from './form_add_user';
import List_users from './list_users';

export default function Dashboard() {
  return (
    <Fragment>
      <Form_add_user />
      <List_users />
    </Fragment>
  );
}