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
   
      

      //by Class value
      //cy.get('.styles_submitBtn__Rgj05'); 
      //by Attribute name
      //cy.get('[searchQuery]') ;
      
      //http://localhost:3000/no/om-oss
        
      //cy.get('.styles_menu__c9uXT > a:nth-child(1)').click();
      //cy.get('a:nth-child(2)').click();
      //cy.get('.styles_menu__c9uXT > a:nth-child(3)').click();
      //cy.get('.styles_menu__c9uXT > a:nth-child(4)').click();~La policia esta obligada
      //cy.get('.styles_menu__c9uXT > a:nth-child(5)').click();
     // cy.get('a:nth-child(6)').click();
     // cy.get('a:nth-child(7)').click();


      //1 by Tag name
      cy.get('input');
      
      //2 by ID
      cy.get('#inputEmail1');
      
      //3 by Class value
      cy.get('.input-full-width');
      
      //4 by Attribute name
      cy.get('[fullwidth]');
      
      //5 by Attribute and value
      cy.get('[placeholder="Email"]');
      
      //6 by entire Class value
      cy.get('[class="input-full-width size-medium shape-rectangle"]');

      //7 by two attributes
      cy.get('[placeholder="Email"][fullwidth]');

      //8 by tag, attribute id and class
      cy.get('input[placeholder="Email"]#inputEmail1.input-full-width]');

      //9 by cypress test ID
      cy.get('[data-cy="inputEmail1"]');
      

    });
  
    
    it('Test NO under menu', () => {
      cy.visit('/');
      cy.visit('http://localhost:3000/no/ansatte');
      cy.contains('Ansatte').should('be.visible');~

       /* ==== Test meny opsjon ==== */
       cy.visit('/');
       cy.visit('http://localhost:3000/no/ansatte');
       cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
       cy.contains('Ansatte');
      
       
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
    it('Test EN under menu', () => {
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
  
  });

 // cy.visit('http://localhost:3000/no');

