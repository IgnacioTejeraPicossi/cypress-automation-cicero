describe('Test på Cicero Oslo', () => {
    it('Sjekk at hjemmesiden lastes', () => {
      cy.visit('/');
      cy.contains('Cicero').should('be.visible');
    });
  });
 
  