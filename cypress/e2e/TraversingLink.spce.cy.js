/// <reference types="cypress" />

const visitUrl = 'https://testoba.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+july29+vh+grp0@gmail.com', // Login vault user 
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
    cy.wait(5000)
    cy.get('.page-toolbar__title').should('contain','Unfiled')

    cy.contains('Shared').click()     //Click on shared sections
    cy.wait(5000)
    cy.get('.page-toolbar__title').should('contain','Shared')

    cy.contains('Expiring').click() //Click on Expiring Link page
    cy.wait(5000)
    cy.get('.sidebar__dropdown-children-group > :nth-child(4) > .sidebar__link').should('contain','Expiring')


    cy.contains('Deleted').click()   //click on Deleted tab 
    cy.wait(5000)
    cy.get(':nth-child(5) > .sidebar__link').should('contain','Deleted')

    cy.contains('Reminders').click() // Click on Remidner page
    cy.wait(5000)
    cy.get('.sidebar__list > :nth-child(3) > .sidebar__link').should('contain','Reminders')


    cy.contains('Contacts').click()  //Click on Contacts page
    cy.wait(5000)
    cy.get('.sidebar__list > :nth-child(4) > .sidebar__link').should('contain','Contacts')
    cy.get('.sidebar__list > :nth-child(5) > .sidebar__link').click()
    cy.wait(5000)
    cy.get('.page-toolbar__title').should('contain','Quick Links')


    cy.get('.sidebar__list > :nth-child(1) > .sidebar__link').click()
    cy.get('.dashboard__header-title').should('contain','Welcome')

    cy.contains('All').click()       //Go back to all page
    cy.get('.page-toolbar__title').should('contain','All Documents')

    cy.get('.sidebar__list > :nth-child(4) > .sidebar__link').click(); //Click on Contact page.
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    

  







  });
});

