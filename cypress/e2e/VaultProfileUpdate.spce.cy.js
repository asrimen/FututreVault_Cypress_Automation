/// <reference types="cypress" />


    const visitUrl = 'https://testoba.beta.futurevault.com/';


    const loginCred = {
    'vh':{
      'email':'asrimen79+vh+oct6+test@gmail.com', // Login vault user 
      'password':'Rimen1234'
   
    }
  };
  
  context('Vault User update the profile from setting page', () => {
    beforeEach(() => {
      
      cy.visit(visitUrl);
       // If session out page comes then click on Logout Button 
  
  
    });
  
    it('Update the profile informaton from setting area', { 
      
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
        cy.get('.page-toolbar__title').should ('contain' , 'Profile')

        cy.get('.contacts-form__wrapper > :nth-child(1) > :nth-child(1)').type('+Update cy 1s Name')
        cy.get('.contacts-form__wrapper > :nth-child(1) > :nth-child(2)').type('Last cypress')
        cy.get('.contacts-form__wrapper > :nth-child(1) > :nth-child(4)').click()
        cy.get('[style="display: block;"] > :nth-child(1)').type('More Update name ')  //More Update click  
        cy.get('[style="display: block;"] > :nth-child(3)').type('ITC Company Update')

        cy.get('.button__primary').click() //Click Save button 

        cy.get('.navbar__profile-wrapper').click()
        cy.get('[aria-label="Logout"]').click()
        cy.get('.button').should('contain','Login')




})



})
  })


