import React from 'react';
import {Route} from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserPage from './pages/UserPage';

const AppBody = () => (
  <div className="App-body">
    <Route exact path="/" component={UserListPage} />
    <Route path="/user/:id" component={UserPage} />
  </div>
);

export default AppBody;
