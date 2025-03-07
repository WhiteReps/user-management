describe('User List and Favorites', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  
    // Visit the home page
    cy.visit('/');
  });

  it('should display a list of users', () => {
    // Verify that the page title is displayed
    cy.get('h1').should('contain', 'User List');

    // Verify that 10 users are displayed
    cy.get('.grid > div').should('have.length', 10);

    // Verify that each user card contains the name, email, and company name
    cy.get('.grid > div').each(($el) => {
      cy.wrap($el).find('h2').should('exist'); // Name
      cy.wrap($el).find('p').should('have.length', 2); // Email and company name
    });
  });

  it('should add a user to favorites', () => {
    // Click the "Favorite" button on the first user card
    cy.get('.grid > div').first().find('button[data-cy="favorite-button"]').click();

    // Verify that the button changes to a filled heart (❤️)
    cy.get('.grid > div').first().find('button[data-cy="favorite-button"]').should('contain', '❤️');

    // Navigate to the Favorites page
    cy.get('nav a').contains('Favorites').click();

    // Verify that the user is displayed in the Favorites list
    cy.get('.grid > div').first().find('h2').should('contain', 'Leanne Graham');
  });

  it('should remove a user from favorites', () => {
    // Add the first user to favorites
    cy.get('.grid > div').first().find('button[data-cy="favorite-button"]').click();

    // Navigate to the Favorites page
    cy.get('nav a').contains('Favorites').click();

    // Verify that the user is displayed in the Favorites list
    cy.get('.grid > div').should('have.length', 1);

    // Click the "Unfavorite" button on the user card
    cy.get('.grid > div').first().find('button[data-cy="favorite-button"]').click();

    // Verify that the user is removed from the Favorites list
    cy.get('.grid > div').should('have.length', 0);
  });

  it('should filter users by name', () => {
    // Type a search query into the search bar
    cy.get('input[type="text"]').type('Leanne');
  
    cy.get('button[type="submit"]').click();

    // Wait for the filtered results to update
    cy.wait(1000); // Adjust the delay if needed
  
    // Verify that only 1 user is displayed
    cy.get('.grid > div').should('have.length', 1);
  
    // Verify that the displayed user is "Leanne Graham"
    cy.get('.grid > div').first().find('h2').should('contain', 'Leanne Graham');
  });
});