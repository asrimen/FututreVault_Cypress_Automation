/// <reference types="cypress" />

context('ForgotPasswordLink', () => {
    beforeEach(() => {
      cy.visit('https://testoba.beta.futurevault.com/')
    })
  
    it('Click on the forgot password Link', () => {
      // https://on.cypress.io/viewport
  
      cy.contains('Forgot your password?').click()
      cy.get('.form-control__wrapper').type('asrimen79+vh+oct6+test@gmail.com')
      cy.get('.button').click()
  
        //.should('contain','An email has been sent to help you reset the password')
  
        cy.get('div > :nth-child(2) > a').click()
        cy.get('.button').should('contain','Login')


  
  
  
        
  
  
  
  
  
  
  
  
      
  
  
  
  
    })
    })
  
  
  
  