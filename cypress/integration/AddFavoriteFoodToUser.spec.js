describe('Adding Favorite Foods to a User', () => {
  it('renders the correct number of food items for the user', () => {
    cy.mock({
      Query: () => ({
        user: () => ({
          favoriteFoods: [
            {foodItem: {name: 'Spaghetti'}, eatingFrequency: 'WEEKLY'},
            {foodItem: {name: 'Coconut Water'}, eatingFrequency: 'DAILY'},
          ],
        }),
      }),
    });
    cy.visit('http://localhost:3000/user/1');
    cy.get('h2').contains('favorite foods:');
    cy.get('li').should('have.length', 2);
    cy.contains('li', 'I like to eat Spaghetti on a weekly basis');
    cy.contains('li', 'I like to eat Coconut Water on a daily basis');
  });

  describe('when the user does not fill in the Food Name', () => {
    it('shows an error', () => {
      cy.visit('http://localhost:3000/user/1');
      cy.get('button').click();
      cy.contains('div', 'Food Name and Eating Frequency are required!');
    });
  });

  describe('when the user does not select an Eating Frequency', () => {
    it('shows an error', () => {
      cy.visit('http://localhost:3000/user/1');
      cy.get('button').click();
      cy.contains('div', 'Food Name and Eating Frequency are required!');
    });
  });

  describe('when the user fills in all required information', () => {
    it('Adds the new food item to the list and blanks out the form', () => {
      cy.mock({
        Query: () => ({
          user: () => ({
            favoriteFoods: [],
          }),
        }),
        Mutation: () => ({
          addFavoriteFood: () => ({
            foodItem: {
              name: 'Mac & Cheese',
            },
            eatingFrequency: 'WEEKLY',
          }),
        }),
      });
      cy.visit('http://localhost:3000/user/1');
      cy.get('input').type('Mac & Cheese');
      cy.get('select').select('WEEKLY');
      cy.get('button').click();
      cy.contains('li', 'I like to eat Mac & Cheese on a weekly basis');
      cy.get('input').should('have.value', '');
      cy.get('select').should('have.value', null);
    });
  });
});
