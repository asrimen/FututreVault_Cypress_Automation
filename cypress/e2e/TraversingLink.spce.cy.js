/// <reference types="cypress" />

const visitUrl = 'https://testoba.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+oct6+test@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

  //context('Login vault user and terversing all pages and check links', () => {
  beforeEach(() => {
    cy.visit(visitUrl);
  });

  it('Login as a vault holder and terversing all pages link',  { 
    
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

    cy.contains('Unfiled').click()    //Click on Unfiled section 
    cy.contains('Shared').click()     //Click on shared sections
    cy.contains('Deleted').click()   //click on Deleted tab 
    cy.contains('Reminders').click() // Click on Remidner page
    cy.contains('Contacts').click()  //Click on Contacts page
    cy.contains('All').click()       //Go back to all page

    cy.get('.sidebar__list > :nth-child(4) > .sidebar__link').click(); //Click on Contact page.
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')

    

  







  });
});

