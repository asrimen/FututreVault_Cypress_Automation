/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'SponsorAdmin':{
    'email':'asrimen79+admin+dec6@gmail.com', // Login Sponsor Admin user
    'password':'Rimen1234'
 
  }
};

  //context('Login vault user and terversing all pages and check links', () => {
  beforeEach(() => {
    cy.visit(visitUrl);
  });


 it('Login as a Sponsor admin and Verify sponsor admin and access into clinet User',() => { 
    
 }, () => {
      
     cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
      if ($ele.is(":enabled")) {
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.SponsorAdmin.email);
          cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.SponsorAdmin.password);
          cy.get('.button').click()
          cy.wait(5000)  
      }
      else
      {
          cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
          cy.get('.button').click()
          cy.wait(5000) 
      }
    //cy.get('.page-toolbar__title').should('contain' , 'Client List')
    cy.wait(5000)

    cy.get(':nth-child(3) > .smart-table__table-row > :nth-child(3)').dblclick() // Click on Vault user
    cy.get('.dashboard__header-title').should('contain','Welcome')

    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
  
    
  
  })

 })
  

  it('Sponsor admin access into vault and Verify vault user pages',()=> {


  }, () => {
      
    cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
     if ($ele.is(":enabled")) {
         cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.SponsorAdmin.email);
         cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.SponsorAdmin.password);
         cy.get('.button').click()
         cy.wait(5000)  
     }
     else
     {
         cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
         cy.get('.button').click()
         cy.wait(5000) 
     }
    //cy.get('.page-toolbar__title').should('contain' , 'Client List')
    cy.get(':nth-child(3) > .smart-table__table-row > :nth-child(3)').dblclick() // Click on Vault user
    cy.get('.dashboard__header-title').should('contain','Welcome')
    cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link').click()



     
  
  
  
  })

 
 })

 
