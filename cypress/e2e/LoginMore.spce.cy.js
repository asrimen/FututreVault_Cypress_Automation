/// <reference types="cypress" />



it('Login as a Vault and Log out',() => {

  cy.visit('https://gta.beta.futurevault.com/')

  cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com').click()
  cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
  cy.get('.button').click()
  cy.get('.dashboard__header-title').should('contain','Welcome, Rimen Vault')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')

})

it('Login as a Sponsor admin and Verify sponsor admin and Log out',() => {

  cy.visit('https://gta.beta.futurevault.com/')

  cy.get('.token-refresh-modal__form-subtext > a').click()
  cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+admin+dec6@gmail.com	').click()
  cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'Client List')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')

  

})

it('Login as a Sponsor Rep and Verify sponsor Rep and Log out',() => {

  cy.visit('https://gta.beta.futurevault.com/')
  cy.get('.token-refresh-modal__form-subtext > a').click()
  cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+rep+dec6@gmail.com').click()
  cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'Client List')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')

})


it('Login as a Trusted advisor and Verify Trusted Advisor user and Log out',() => {

  cy.visit('https://gta.beta.futurevault.com/') 

  cy.get('.token-refresh-modal__form-subtext > a').click()
  cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+ta+nov29+1@gmail.com').click()
  cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'Client List')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')


})

