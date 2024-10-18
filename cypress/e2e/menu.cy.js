describe('Test NO menu', () => {
    it('Test NO menu', () => {
      cy.visit('/no');
      cy.contains('CICERO').should('be.visible');  // Sjekk at teksten "CICERO" er synlig
      cy.contains('Om oss').should('be.visible'); 
      cy.contains('Magasinet Klima').should('be.visible'); 
      cy.contains('Tema').should('be.visible'); 
      cy.contains('Ansatte').should('be.visible'); 
      cy.contains('Prosjekter').should('be.visible'); 
      cy.contains('Publikasjoner').should('be.visible'); 
      cy.contains('Arrangementer').should('be.visible');
      
      cy.contains('Søk').should('be.visible');
   
      
      //1 by Tag name
      //cy.get('input');
      
      //2 by ID
      //cy.get('#inputEmail1');
      
      //3 by Class value
      //cy.get('.input-full-width');
      
      //4 by Attribute name
      //cy.get('[fullwidth]');
      
      //5 by Attribute and value
      //cy.get('[placeholder="Email"]');
      
      //6 by entire Class value
      //cy.get('[class="input-full-width size-medium shape-rectangle"]');

      //7 by two attributes
      //cy.get('[placeholder="Email"][fullwidth]');

      //8 by tag, attribute id and class
      //cy.get('input[placeholder="Email"]#inputEmail1.input-full-width]');

      //9 by cypress test ID
      //cy.get('[data-cy="inputEmail1"]');
      

    });
   
    it('Test NO under menu ansatte', () => {
      cy.visit('/');
      cy.visit('http://localhost:3000/no/ansatte');
      cy.contains('Ansatte').should('be.visible');~

       /* ==== Test meny opsjon ==== */
       cy.visit('/');
       cy.visit('http://localhost:3000/no/ansatte');
       cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
       cy.contains('Ansatte');
     
       
    });
    it('Test NO under menu prosjekter', () => {
      cy.visit('/');
      cy.visit('http://localhost:3000/no/prosjekter');
      cy.contains('Ansatte').should('be.visible');~

       /* ==== Test meny opsjon ==== */
       cy.visit('/');
       cy.visit('http://localhost:3000/no/prosjekter');
       cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
       cy.contains('prosjekter');
    
       
    });
  });

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
  });

 // cy.visit('http://localhost:3000/no');

