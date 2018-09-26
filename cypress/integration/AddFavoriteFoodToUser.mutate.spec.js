describe('Adding Favorite Foods to a User', () => {
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

      // Navigate to page
      cy.visit('http://localhost:3000/user/1');

      // Validate page content
      cy.contains('div', 'No favorites yet!');

      // Fill in and submit form (triggers mutation)
      cy.get('input').type('Mac & Cheese');
      cy.get('select').select('WEEKLY');
      cy.get('button').click();

      // Validate that mutation result displays on screen
      cy.contains('li', 'I like to eat Mac & Cheese on a weekly basis');

      // Validate form is reset
      cy.get('input').should('have.value', '');
      cy.get('select').should('have.value', null);

      // Validate success message
      cy.contains('div', 'You did it!');
    });
  });
});
