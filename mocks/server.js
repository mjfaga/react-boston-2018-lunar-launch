const {ApolloServer} = require('apollo-server');
const requireText = require('require-text');
const mocks = require('./mocks');
const typeDefs = requireText('./schema.graphql', require);

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen({port: 3001}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
