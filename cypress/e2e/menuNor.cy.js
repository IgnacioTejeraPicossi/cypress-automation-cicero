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
    it('Test NO under menu Tema', () => {
      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema');
      cy.contains('Tema').should('be.visible');

      /* ==== Test meny opsjon ==== */
      //cy.visit('/');
      //cy.visit('http://localhost:3000/no/tema');
      //cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
      //cy.contains('Tema');      


      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema/aksept');
      cy.contains('Aksept').should('be.visible');

      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema/arealbruk');
      cy.contains('Arealbruk').should('be.visible');

      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema/arktis');
      cy.contains('Arktis').should('be.visible');

      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema/co2-utslipp-globalt');
      cy.contains('CO2-utslipp globalt').should('be.visible');

      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema/co2-utslipp-i-norge');
      cy.contains('CO2-utslipp i Norge').should('be.visible');

      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema/ekstremvaer');
      cy.contains('Ekstremvær').should('be.visible');

      cy.visit('/');
      cy.visit('http://localhost:3000/no/tema/energiforbruk');
      cy.contains('Energiforbruk').should('be.visible');


       
           
    });
  });

  
 // cy.visit('http://localhost:3000/no');

