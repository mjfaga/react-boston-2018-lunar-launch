import updateFavoriteFoodList from '../updateFavoriteFoodList';

describe('updateFavoriteFoodList', () => {
  it('reads and writes to the cache', () => {
    const userId = 123;
    const cache = {
      readQuery: jest.fn(() => ({
        user: {id: userId, favoriteFoods: [{some: 'property'}]},
      })),
      writeQuery: jest.fn(),
    };
    const data = {data: {addFavoriteFood: {new: 'property'}}};

    updateFavoriteFoodList(123)(cache, data);

    const query = expect.any(Object);
    expect(cache.readQuery).toHaveBeenCalledWith({
      query,
      variables: {id: userId},
    });
    expect(cache.writeQuery).toHaveBeenCalledWith({
      query,
      data: {
        user: {
          id: userId,
          favoriteFoods: [{some: 'property'}, {new: 'property'}],
        },
      },
    });
  });
});
