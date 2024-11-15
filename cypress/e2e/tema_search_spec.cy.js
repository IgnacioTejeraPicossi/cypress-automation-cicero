describe('Test av søkefeltet på Tema-siden', () => {
  
    // Før hver test, åpner vi siden
    beforeEach(() => {
      cy.visit('http://localhost:3000/no/tema'); // Bytt ut med riktig URL hvis nødvendig
    });
  
    it('Bør vise søkefeltet og tillate å skrive i det', () => {
      // Sjekker at søkefeltet er synlig
      cy.get('input[placeholder="Søk etter ..."]').should('be.visible');
  
      // Skriver inn tekst i søkefeltet
      cy.get('input[placeholder="Søk etter ..."]').type('CO2-utslipp');
  
      // Sjekker at verdien er skrevet inn riktig
      cy.get('input[placeholder="Søk etter ..."]').should('have.value', 'CO2-utslipp');
    });
  
    it('Bør utføre et søk ved å klikke på søkeknappen', () => {
      // Skriver inn tekst i søkefeltet
      cy.get('input[placeholder="Søk etter ..."]').type('CO2-utslipp');
  
      // Klikker på søkeknappen
      cy.get('button').contains('Søk').click();
  
      // Verifiserer at resultatene oppdateres etter søket
      // Dette avhenger av hvordan søkefunksjonen er implementert i applikasjonen din.
      // For eksempel, sjekk om en spesifikk tekst vises etter søket.
  
      // Eksempel på verifisering (endre i henhold til forventet oppførsel):
      cy.get('body').contains('CO2-utslipp'); // Sjekker om tekst relatert til søket vises
    });
  
    it('Bør vise antall treff etter søket', () => {
      // Skriver inn tekst i søkefeltet
      cy.get('input[placeholder="Søk etter ..."]').type('klima');
  
      // Klikker på søkeknappen
      cy.get('button').contains('Søk').click();
  
      // Verifiserer at antall treff er synlig etter søket
      cy.get('body').contains('treff'); // Sjekker om "treff" vises på siden
    });
  });