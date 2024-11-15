describe('Test av søkefeltet på siden', () => {
  
    // Før hver test, åpner vi siden
    beforeEach(() => {
      cy.visit('http://localhost:3000/no'); // Bytt ut med riktig URL hvis nødvendig
    });
     

    it('Bør vise søkefeltet og tillate å skrive i det', () => {

      // Klikker på søkeknappen
      cy.get('button').contains('Søk').click();


      // Sjekker at søkefeltet er synlig
      cy.get('input[placeholder="Søk etter ..."]').should('be.visible');
  
      // Skriver inn tekst i søkefeltet
      cy.get('input[placeholder="Søk etter ..."]').type('klimaforskning');
  
      // Sjekker at verdien er skrevet inn riktig
      cy.get('input[placeholder="Søk etter ..."]').should('have.value', 'klimaforskning');
    });
  
    it('Bør utføre et søk ved å klikke på søkeknappen', () => {

      // Klikker på søkeknappen
      cy.get('button').contains('Søk').click();
        
      // Skriver inn tekst i søkefeltet
      cy.get('input[placeholder="Søk etter ..."]').type('klimaforskning');
  
      // Klikker på søkeknappen
      cy.get('button').contains('Søk').click();
  
      // Her kan du verifisere den forventede oppførselen etter søket.
      // For eksempel kan du sjekke om en ny side lastes inn eller om resultater vises.
      // Dette avhenger av hvordan søkefunksjonen er implementert i applikasjonen din.
      
      // Eksempel på verifisering (endre i henhold til forventet oppførsel):
      cy.url().should('include', '/search'); // Sjekker om det omdirigeres til en URL med resultater
    });
  });