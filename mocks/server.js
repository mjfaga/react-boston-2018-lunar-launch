const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen({port: 3001}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
