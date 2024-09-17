describe('Testing av kontaktskjemaet', () => {
    it('Sender kontaktskjemaet vellykket', () => {
      cy.visit('/contact');
      cy.get('#navn').type('Ola Nordmann');  // Navn-feltet
      cy.get('#epost').type('ola@example.com');  // E-post-feltet
      cy.get('#melding').type('Dette er en testmelding.');  // Melding-feltet
      cy.get('button[type="submit"]').click();  // Klikk på send-knappen
      cy.contains('Melding sendt vellykket').should('be.visible');  // Bekreft vellykket melding
    });
  });
  