/// <reference types="cypress" />


const visitUrl = 'https://testoba.beta.futurevault.com/';

const loginCred = {
'vh':{
  'email':'asrimen79+vh+oct6+test@gmail.com', // Login vault user 
  'password':'Rimen1234'

}
};

//context('Vault User update the profile from setting page', () => {
beforeEach(() => {
  
  cy.visit(visitUrl);
   // If session out page comes then click on Logout Button 


});type(loginCred.vh.password);


it('Vault User click on Appearance and Change the Language' ,() => {

 

  cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
      if ($ele.is(":enabled")) {
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email);
          cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').
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
    cy.get('[aria-label="Account Settings"]').click() 
    cy.get('[href="/settings/appearance"]').click()
    cy.get(':nth-child(2) > .appearance-language__bottom').click()
    cy.get('.settings__sidebar-title').should('contain' , 'Réglages') 
    cy.get(':nth-child(1) > .appearance-language__bottom').click()  //Again change to english
    cy.get('.settings__sidebar-title').should('contain' , 'Setting')


    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')







  })
})

