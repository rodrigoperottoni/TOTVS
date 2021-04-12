// Teste1..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Acesso', function() {
  it('Abrir página', function() {
    cy.visit(' https://the-internet.herokuapp.com/dynamic_loading/1')
    cy.contains('Start').click()
    cy.wait(1000)
    cy.contains('Hello World!')
  })
})