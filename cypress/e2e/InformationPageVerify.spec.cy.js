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

    cy.get('.dashboard__header-title').should('contain', 'Welcome,')
    
    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button

    //cy.get('[href="/settings/security"]').click() // Click on Security page
    cy.get('[href="/settings/information"]').click() // Click on Information page
    cy.wait(5000)
    cy.get('.page-toolbar__title').should('contain' , 'Information') // Verify Information page
    cy.get('.information__grid-wrapper > :nth-child(1) > :nth-child(1)').should('contain' , 'Your Package Settings')
    cy.get('.information__grid-wrapper > :nth-child(1) > :nth-child(3)').should('contain' , 'Storage').wait(5000)
    cy.get(':nth-child(2) > .settings__section-title').should('contain', 'Click on the link below to read our:')







        //Log out from User account

        cy.get('.navbar__profile-wrapper').click()
        cy.get('[aria-label="Logout"]').click().wait(5000)
        cy.get('.button').should('contain' , 'Login')
    




})
})



