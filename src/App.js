import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <AppHeader />
      <AppBody />
    </div>
  </BrowserRouter>
);

export default App;
