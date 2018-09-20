import gql from 'graphql-tag';

const ADD_FAVORITE_FOOD_MUTATION = gql`
  mutation AddFavoriteFood(
    $userId: ID!
    $name: String!
    $eatingFrequency: EatingFrequency!
  ) {
    addFavoriteFood(
      userId: $userId
      name: $name
      eatingFrequency: $eatingFrequency
    ) {
      id
      foodItem {
        id
        name
      }
      eatingFrequency
    }
  }
`;

export default ADD_FAVORITE_FOOD_MUTATION;
