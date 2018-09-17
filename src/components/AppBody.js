import React from 'react';
import {Route} from 'react-router-dom';
import UserList from './UserList';

const AppBody = () => (
  <div className="App-body">
    <Route component={UserList} />
  </div>
);

export default AppBody;
