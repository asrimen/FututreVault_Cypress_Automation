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

    it('Click on the forgot password Link', () => {

      
}, () => {


       
  cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
   if ($ele.is(":enabled")) {
       cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email);
       cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password);
       cy.get('.button').click()
       cy.wait(9000)  
   }
   else
   {
       cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
       cy.get('.button').click()
       cy.wait(9000) 
   }
      
   cy.get('.navbar__profile-wrapper').click()   // Click on welcome menu link
   cy.wait(5000)
   cy.get('[aria-label="Logout"]').click() // Logout from user account.
   cy.wait(5000)


   

      cy.get('.login__form-link').click()
      cy.get('.form-control__wrapper').type('asrimen79+vh+oct6+test@gmail.com')
      cy.get('.button').click()
  
        //.should('contain','An email has been sent to help you reset the password')
  
        cy.get('div > :nth-child(2) > a').click()
        cy.get('.button').should('contain','Login')


  
  
  
        
  
  
  
    })
    })
  
  
  
  