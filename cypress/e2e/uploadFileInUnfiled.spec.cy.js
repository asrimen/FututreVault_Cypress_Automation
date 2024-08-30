
/// <reference types="cypress" />

import 'cypress-file-upload';

const visitUrl = 'https://testoba.beta.futurevault.com/';

const loginCred = {
'vh':{
  'email':'asrimen79+aug2+vh+grp0@gmail.com', // Login vault user 
  'password':'Rimen1234'

}
};

//context('Vault User update the profile from setting page', () => {
beforeEach(() => {
  
  cy.visit(visitUrl);
   // If session out page comes then click on Logout Button 


});



it('Upload Fine in Unfiled section',() =>{

    
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

     

    cy.contains('Documents').dblclick({force: true})
    cy.contains('All').click({ force: true })

    //Upload File in unfiled area

    cy.contains('Unfiled').click()
  
    

        cy.wait(5000)

        cy.get('.icon-view__container').attachFile('Test2.pdf', { subjectType: 'drag-n-drop' });
        //cy.get('.document-upload-footer-toolbar > a').click()
        cy.wait(5000)
        
        cy.get('.progress-queue__header').should('contain', 'Uploaded 1 of 1 documents')

       
        
       
     //LogOut From TA user account
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    

    })
  })


 it('Preivew documents from unfiled area', () =>{
    
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
    cy.get('.button').should('contain','Login')


    cy.contains('Documents').dblclick({force: true})
    cy.contains('All').click({ force: true })

    //Upload File in unfiled area
    
    cy.get(':nth-child(2) > .sidebar__link').click()
    cy.contains('Test2').dblclick()
    cy.wait(6000)

    //cy.get(':nth-child(1) > .form-control__label').should('contain' , 'Name')



    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    

    
    
    
    
    })
    
    



  })

