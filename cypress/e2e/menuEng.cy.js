describe('Test EN menu', () => {
    it('Test EN menu', () => {

      cy.visit('/');
      cy.visit('http://localhost:3000/en');
      cy.contains('CICERO').should('be.visible');  // Sjekk at teksten "CICERO" er synlig
      cy.contains('Events').should('be.visible'); 
      cy.contains('Newsletter').should('be.visible'); 
      cy.contains('About').should('be.visible'); 
      cy.contains('Projects').should('be.visible'); 
      cy.contains('Research groups').should('be.visible'); 
      cy.contains('Topics').should('be.visible'); 
      cy.contains('Employees').should('be.visible'); 
      cy.contains('Articles').should('be.visible'); 
      cy.contains('Publications').should('be.visible'); 
                  
    });
    it('Test EN under menu employees', () => {
      cy.visit('/');
      cy.visit('http://localhost:3000/en/employees');
      cy.contains('employees').should('be.visible');~

       /* ==== Test meny opsjon ==== */
       cy.visit('/');
       //div[normalize-space()='Ansatte']
       cy.visit('http://localhost:3000/en/employees');
       cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
       cy.contains('employees');
      
    });
    it('Test EN under menu Projects', () => {
      cy.visit('/');
      cy.visit('http://localhost:3000/en/Projects');
      cy.contains('Ansatte').should('be.visible');~

       /* ==== Test meny opsjon ==== */
       cy.visit('/');
       cy.visit('http://localhost:3000/no/Projects');
       cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
       cy.contains('Projects');
      
       
    });
    it('Test EN under menu Tema', () => {
        cy.visit('/');
        cy.visit('http://localhost:3000/en/topics');
        cy.contains('Topics').should('be.visible');~
  
         /* ==== Test meny opsjon ==== */
         cy.visit('/');
         cy.visit('http://localhost:3000/no/topics');
         cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
         cy.contains('Topics');
                 
      });
  });

 // cy.visit('http://localhost:3000/no');