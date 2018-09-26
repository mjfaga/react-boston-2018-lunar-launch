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

    // Navigate to page
    cy.visit('http://localhost:3000/user/1');

    // Validate page content
    cy.get('h2').contains('favorite foods:');
    cy.get('li').should('have.length', 2);
    cy.contains('li', 'I like to eat Spaghetti on a weekly basis');
    cy.contains('li', 'I like to eat Coconut Water on a daily basis');
  });

  describe('when the user does not fill in the Food Name', () => {
    it('shows an error', () => {
      // Navigate to page
      cy.visit('http://localhost:3000/user/1');

      // Fill in only Eating Frequency
      cy.get('select').select('DAILY');

      // Submit form
      cy.get('button').click();

      // Validate error message
      cy.contains('div', 'Food Name and Eating Frequency are required!');
    });
  });

  describe('when the user does not select an Eating Frequency', () => {
    it('shows an error', () => {
      // Navigate to page
      cy.visit('http://localhost:3000/user/1');

      // Fill in only Food Name
      cy.get('input').type('Fluffernutter Sandwich');

      // Submit form
      cy.get('button').click();

      // Validate error message
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
          addFavoriteFood: (parent, args) => ({
            foodItem: {
              name: args.name,
            },
            eatingFrequency: args.eatingFrequency,
          }),
        }),
      });

      // Navigate to page
      cy.visit('http://localhost:3000/user/1');

      // Validate page content
      cy.contains('div', 'No favorites yet!');

      // Fill in and submit form (triggers mutation)
      cy.get('input').type('Fluffernutter Sandwich');
      cy.get('select').select('DAILY');
      cy.get('button').click();

      // Validate that mutation result displays on screen
      cy.contains(
        'li',
        'I like to eat Fluffernutter Sandwich on a daily basis'
      );

      // Validate form is reset
      cy.get('input').should('have.value', '');
      cy.get('select').should('have.value', null);

      // Validate success message
      cy.contains('div', 'You did it!');
    });
  });
});
