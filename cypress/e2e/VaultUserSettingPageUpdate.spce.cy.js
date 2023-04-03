/// <reference types="cypress" />






it('Vault User Setting page and Update Vault User Information' ,() => {

cy.visit('https://gta.beta.futurevault.com/')

cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com')
cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
cy.get('.button').click()
cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')

cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button
cy.get('.page-toolbar__title').should ('contain' , 'Profile')

cy.get('.contacts-form__wrapper > :nth-child(1) > :nth-child(1)').type('+Update cy 1s Name')
cy.get('.contacts-form__wrapper > :nth-child(1) > :nth-child(2)').type('Last cypress')
cy.get('.contacts-form__wrapper > :nth-child(1) > :nth-child(4)').click()
cy.get('[style="display: block;"] > :nth-child(1)').type('More Update name ')  //More Update click  
cy.get('[style="display: block;"] > :nth-child(3)').type('ITC Company Update')

cy.get('.button__primary').click() //Click Save button 

cy.get('.navbar__profile-wrapper').click()
cy.get('[aria-label="Logout"]').click()
cy.get('.button').should('contain','Login')




})



