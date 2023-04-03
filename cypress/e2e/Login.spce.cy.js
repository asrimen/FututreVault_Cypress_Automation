/// <reference types="cypress" />

it('Login as a Vault holder and Logout' , () => {

  cy.visit('https://gta.beta.futurevault.com/')

  cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com').click()
  cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
  cy.get('.button').click()
  cy.get('.dashboard__header-title').should('contain','Welcome, Rimen Vault')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')




})