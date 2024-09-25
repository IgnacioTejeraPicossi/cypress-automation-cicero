describe('Test menu', () => {
    it('Test NO menu', () => {
      cy.visit('/');
      cy.contains('CICERO').should('be.visible');  // Sjekk at teksten "CICERO" er synlig
      cy.contains('Om oss').should('be.visible'); 
      cy.contains('Magasinet Klima').should('be.visible'); 
      cy.contains('Tema').should('be.visible'); 
      cy.contains('Ansatte').should('be.visible'); 
      cy.contains('Prosjekter').should('be.visible'); 
      cy.contains('Publikasjoner').should('be.visible'); 
      cy.contains('Arrangementer').should('be.visible'); 
      
      //http://localhost:3000/no/om-oss
        
      //cy.get('.styles_menu__c9uXT > a:nth-child(1)').click();
      //cy.get('a:nth-child(2)').click();
      //cy.get('.styles_menu__c9uXT > a:nth-child(3)').click();
      //cy.get('.styles_menu__c9uXT > a:nth-child(4)').click();
      //cy.get('.styles_menu__c9uXT > a:nth-child(5)').click();
     // cy.get('a:nth-child(6)').click();
     // cy.get('a:nth-child(7)').click();
      
    });
  
    it('Test under menu', () => {
      cy.visit('/');
      //cy.get('nav').should('be.visible');
    });
  });

  describe('Test menu', () => {
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
  
  });

 // cy.visit('http://localhost:3000/no');

