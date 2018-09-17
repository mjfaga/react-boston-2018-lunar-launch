import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3001',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  </ApolloProvider>
);

export default App;
