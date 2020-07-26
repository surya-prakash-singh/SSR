import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import UsersList,{loadData} from "./UsersList"

export default [
      {
        component: Home,
        path: '/',
        exact: true
      },
      // {
      //   ...AdminsListPage,
      //   path: '/admins'
      // },
      {
        loadData,
        component: UsersList,
        path: '/users'
      },
      // {
      //   ...NotFoundPage
      // }
];