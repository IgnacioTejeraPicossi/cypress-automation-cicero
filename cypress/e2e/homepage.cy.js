describe('Hjemmeside tester', () => {
  it('Verifiser at hjemmesiden laster korrekt', () => {
    cy.visit('/');  // Dette tilsvarer å besøke http://localhost:3000/no
    cy.contains('CICERO').should('be.visible');  // Sjekk at teksten "CICERO" er synlig
  });
});

 
  