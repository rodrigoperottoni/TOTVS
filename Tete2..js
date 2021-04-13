// Tete2..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Acesso', function() {
  it('Abrir página', function() {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom')
    //cy.get('button')
    //cy.focused()
    //  .type('Bar{enter}')
     cy.get('botao').then(($btn) => {
    if ($btn.hasClass('button')) {
      cy.contains($btn.hasClass('button')).click()
    } 
  })
})
