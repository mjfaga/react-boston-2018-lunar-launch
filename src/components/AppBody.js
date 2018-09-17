import React from 'react';
import {Route} from 'react-router-dom';
import UserList from './UserList';
import User from './User';

const AppBody = () => (
  <div className="App-body">
    <Route exact path="/" component={UserList} />
    <Route path="/user/:id" component={User} />
  </div>
);

export default AppBody;
