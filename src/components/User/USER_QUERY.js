import gql from 'graphql-tag';

const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      favoriteFoods {
        id
        foodItem {
          id
          name
        }
        eatingFrequency
      }
    }
  }
`;

export default USER_QUERY;
