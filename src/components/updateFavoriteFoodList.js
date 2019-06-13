import User from './User';

const updateFavoriteFoodList = userId => (cache, {data: {addFavoriteFood}}) => {
  const {user} = cache.readQuery({query: User.query, variables: {id: userId}});

  cache.writeQuery({
    query: User.query,
    data: {
      user: {
        ...user,
        favoriteFoods: [...user.favoriteFoods, addFavoriteFood],
      },
    },
  });
};

export default updateFavoriteFoodList;
