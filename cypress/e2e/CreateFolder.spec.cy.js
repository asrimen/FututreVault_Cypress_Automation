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





      it('Create Folder in all documents page', { 
    
      }, () => {


    
      cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
      if ($ele.is(":enabled")) {
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email)
          cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password)
          cy.get('.button').click()
          cy.wait(5000)  
      }
      else
      {
          cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
          cy.get('.button').click()
          cy.wait(5000) 
      }

    
    cy.get('.sidebar__dropdown-group--expanded > :nth-child(1) > .sidebar__link').dblclick().wait(5000)
    cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link > .sidebar__title').click()
    cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link').click().wait(5000)
    cy.get('.navbar__upload').click().wait(5000)


    cy.get('[aria-label="New Folder"]').type('Folder Created').wait(5000)  // Create folder name  
    //cy.get('.new-folder__entities > :nth-child(1)').click() 
    cy.get('.modal__footer-button-wrapper > :nth-child(2) > .button__info').click() // Folder created successfully 
    cy.get('.navbar__profile-wrapper').click().wait(5000)
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')

    // Successfully Pass this Test case








 
  });
})
