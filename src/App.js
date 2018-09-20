import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter} from 'react-router-dom';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <AppHeader />
        <AppBody />
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
