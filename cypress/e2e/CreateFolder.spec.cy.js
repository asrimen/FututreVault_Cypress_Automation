/// <reference types="cypress" />

const visitUrl = 'https://testoba.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/';
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+dec9+3@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

context('Create folder in all documents page', () => {
  beforeEach(() => {
    cy.visit(visitUrl);
  });

  it('Create Folder in all documents page', { 
    
    }, () => {
    cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.vh.email);
    cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.vh.password);
    cy.get('.button').click()

    
    cy.get('.sidebar__dropdown-group--expanded > :nth-child(1) > .sidebar__link').dblclick()
    cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link > .sidebar__title').click()
    cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link').click()
    cy.get('.navbar__upload').click()


    cy.contains('New Folder').type('Folder Created')  // Create folder name  
    cy.get('.new-folder__entities > :nth-child(1)').click()
    cy.get('.button__primary').click() // Folder created successfully 
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')

    // Successfully Pass this Test case








 
  });
})
