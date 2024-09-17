describe('Tester i forskjellige oppløsninger', () => {
    it('Test i iPhone X', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test i desktop-oppløsning', () => {
      cy.viewport(1280, 720); // Desktop-oppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  });