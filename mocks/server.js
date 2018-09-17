const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    favoriteFoods: [FavoriteFoodItem]
  }

  type FavoriteFoodItem {
    id: ID!
    foodItem: FoodItem!
    user: User!
    eatingFrequency: EatingFrequency!
  }

  type FoodItem {
    id: ID!
    name: String!
  }

  enum EatingFrequency {
    DAILY
    WEEKLY
    MONTHLY
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen({port: 3001}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
