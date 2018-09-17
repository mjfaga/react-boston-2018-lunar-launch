import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3001',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  </ApolloProvider>
);

export default App;
