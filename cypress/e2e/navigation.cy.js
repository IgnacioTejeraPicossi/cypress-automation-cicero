describe('Test på Cicero Oslo', () => {
    it('Naviger til kontaktseksjonen', () => {
      cy.visit('/');
      cy.get('a[href="/contact"]').click(); // Eksempel på velger for kontaktlenke
      cy.url().should('include', '/contact');
    });
  });