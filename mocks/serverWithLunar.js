const {makeExecutableSchema} = require('apollo-server');
const express = require('express');
const bodyParser = require('body-parser');
const {addMockFunctionsToSchema} = require('lunar-core');
const {lunarExpress} = require('lunar-express');
const {ApolloServer} = require('apollo-server-express');
const requireText = require('require-text');
const mocks = require('./mocks');

const typeDefs = requireText('./schema.graphql', require);

const schema = makeExecutableSchema({typeDefs});

addMockFunctionsToSchema({schema, mocks});

const server = new ApolloServer({
  schema,
});

const app = express();
app.use(bodyParser.json());
app.use('/store', lunarExpress({mocks, schema}));
server.applyMiddleware({app});
const listener = app.listen({port: 3001}, () => {
  // eslint-disable-next-line no-console
  console.log(`Running mock graphql server on port ${listener.address().port}`);
});
