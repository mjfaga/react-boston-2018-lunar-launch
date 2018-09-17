import React from 'react';
import foodAndDrink from '../icons/foodAndDrink.svg';

const AppHeader = () => (
  <header className="App-header">
    <img src={foodAndDrink} className="App-logo" alt="logo" />
    <h1 className="App-title">My Favorite Foods</h1>
  </header>
);

export default AppHeader;
