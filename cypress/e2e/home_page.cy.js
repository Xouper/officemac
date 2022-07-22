describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io/commands/actions')
           .get('#action-canvas')
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
           .check().should('be.checked')
    })
  })
