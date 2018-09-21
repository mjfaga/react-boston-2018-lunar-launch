import USER_QUERY from './USER_QUERY';

const updateFavoriteFoodList = userId => (cache, {data: {addFavoriteFood}}) => {
  const {user} = cache.readQuery({query: USER_QUERY, variables: {id: userId}});

  cache.writeQuery({
    query: USER_QUERY,
    data: {
      user: {
        ...user,
        favoriteFoods: [...user.favoriteFoods, addFavoriteFood],
      },
    },
  });
};

export default updateFavoriteFoodList;
