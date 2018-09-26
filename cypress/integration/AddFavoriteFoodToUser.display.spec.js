describe('Adding Favorite Foods to a User', () => {
  it('renders the correct number of food items for the user', () => {
    // Navigate to page
    cy.visit('http://localhost:3000/user/1');

    // Validate page content
    cy.get('h2').contains('favorite foods:');
    cy.get('li').should('have.length', 5);
  });
});
