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

it('Login as a Vault holder and Logout' , () => {

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
   cy.get('.dashboard__header-title').should('contain','Welcome, Rimen Vault')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')

})
})




