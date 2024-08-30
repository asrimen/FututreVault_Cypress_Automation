/// <reference types="cypress" />


    const visitUrl = 'https://testoba.beta.futurevault.com/';


    const loginCred = {
    'vh':{
      'email':'asrimen79+aug2+vh+grp0@gmail.com', // Login vault user 
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
        cy.get('.sidebar__list > :nth-child(1) > .sidebar__link').click()
        cy.get('.dashboard__header-title').should('contain', 'Welcome,')
         
        cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
        cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button
        cy.get('.profile__header-toolbar-button-wrapper > .button').click()


        cy.get('.profile__input-column-inner--general > :nth-child(1)').clear().type('Cy Rimen')
        cy.get('.profile__input-column-inner--general > :nth-child(2)').clear().type('Mid')
        cy.get('.profile__input-column-inner--general > :nth-child(3)').clear().type('Last RI')


        cy.get('.profile__input-column-inner--general > :nth-child(5)').clear().type('ITC')


        cy.get('.button__info').click() //Click Save button 
        cy.wait(5000)
        cy.get('.toast__message').should('contain', 'Successfully updated profile')

        cy.wait(5000)
        cy.get('.navbar__profile-wrapper').click()
        cy.get('[aria-label="Logout"]').click()
        cy.get('.button').should('contain','Login')

         



})



})
  })


