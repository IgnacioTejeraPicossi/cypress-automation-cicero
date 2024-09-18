describe('Navigasjonstester', () => {
  it('Naviger til kontakt-siden', () => {
    cy.visit('/');
    cy.get('a[href="/kontakt"]').click();  // Klikk på lenken til "Kontakt" siden
    cy.url().should('include', '/kontakt');  // Bekreft at URL-en inkluderer /kontakt
  });
});