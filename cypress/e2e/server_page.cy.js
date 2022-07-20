describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000/server.html')
        .get('#btn')
        .click()
        .should('be.clicked')
    })
  })