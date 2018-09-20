import React from 'react';
import {Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserPage from './pages/UserPage';

const AppBody = () => (
  <div className="App-body">
    <Route exact path="/" component={UserList} />
    <Route path="/user/:id" component={UserPage} />
  </div>
);

export default AppBody;
