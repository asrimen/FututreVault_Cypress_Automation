/// <reference types="cypress" />

//const visitUrl = 'https://gta.beta.futurevault.com/'; 

const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+grp0+vh+aug25@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

  
  beforeEach(() => {
    cy.visit(visitUrl);
  });

it('Login Vault holder and Go to setting page' , () => {

}, () => {


       
  cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
   if ($ele.is(":enabled")) {
       cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email);
       cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password);
       cy.get('.button').click()
       cy.wait(5000)  
   }
   else
   {
       cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
       cy.get('.button').click()
       cy.wait(5000) 
   }

  })


    cy.get('.dashboard__header-title').should('contain', 'Welcome,')
    cy.wait(5000)
    
    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button

    cy.get('[href="/settings/notifications"]').click() // Click on Notification page
    cy.get('.page-toolbar__title').should('contain' , 'Notifications') // Verify Notification Page
    
    
    //Log out from User account

    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain' , 'Login')




   

  



  })

  

 it('Check and Unchecked Notification check box and update notification checkbox' ,() => {

  
    cy.get('.token-refresh-modal__form-subtext > a').click()
    cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+grp0+vh+aug25@gmail.com')
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
    cy.get('.button').click()
    cy.get('.dashboard__header-title').should('contain', 'Welcome,')

    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button

    cy.get('[href="/settings/notifications"]').click() // Click on Notification page
    cy.get('.page-toolbar__title').should('contain' , 'Notifications') // Verify Notification Page

    //cy.get('form > :nth-child(2) > :nth-child(2)').click()
    //cy.get('form > :nth-child(4) > :nth-child(3)').click()
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .toggle').click()
    cy.get('.button').click()



   // cy.get('.toast__message').should('contain' , 'Successfully updated notification preferences')


        //Log out from User account

        cy.get('.navbar__profile-wrapper').click()
        cy.get('[aria-label="Logout"]').click()
        cy.get('.button').should('contain' , 'Login')






  })













