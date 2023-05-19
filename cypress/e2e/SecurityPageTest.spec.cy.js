/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+dec6+grp0@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

  
  beforeEach(() => {
    cy.visit(visitUrl);
  });



it('Notification page verify' ,() => {



    cy.visit('https://gta.beta.futurevault.com/')
    
    cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.vh.email)
    cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.vh.password)
    cy.get('.button').click()
    cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')
    
    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button

    cy.get('[href="/settings/security"]').click() // Click on Security page


    cy.get('.page-toolbar__title').should('contain' , 'Security') // Verify Security page



        //Log out from User account

        cy.get('.navbar__profile-wrapper').click()
        cy.get('[aria-label="Logout"]').click()
        cy.get('.button').should('contain' , 'Login')
    




    






})


