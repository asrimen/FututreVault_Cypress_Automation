
/// <reference types="cypress" />

import 'cypress-file-upload';


const visitUrl = 'https://testoba.beta.futurevault.com/';
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+oct6+test@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

context('Upload file in all documents page are', () => {
  beforeEach(() => {
    
    cy.visit(visitUrl);
     // If session out page comes then click on Logout Button 


  });

  it('Upload documents in all documents page area', { 
    
    }, () => {
     

    cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.vh.email);
    cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.vh.password);
    cy.get('.button').click()
    cy.get('.button').should('contain','Login')


    cy.contains('Documents').dblclick({force: true})
    cy.contains('All').click({ force: true })

    //Upload File in unfiled area

    cy.contains('Unfiled').click({force: true})
  
    

        cy.wait(5000)

        cy.get('.icon-view__container').attachFile('Test2.pdf', { subjectType: 'drag-n-drop' });
        //cy.get('.document-upload-footer-toolbar > a').click()

        
        cy.get('.progress-queue__header').should('contain', 'Uploaded 1 of 1 documents')

       
        
       
     //LogOut From TA user account
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    

    })

 it('Preivew documents from unfiled area', { 
    
    }, () => {
     
        cy.get('.token-refresh-modal__form-subtext > a').click({force:true})
    cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.vh.email);
    cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.vh.password);
    cy.get('.button').click()
    cy.get('.button').should('contain','Login')


    cy.contains('Documents').dblclick({force: true})
    cy.contains('All').click({ force: true })

    //Upload File in unfiled area
    
    cy.contains('Unfiled').click({force: true})
    cy.contains('Test2').dblclick()
    cy.get(':nth-child(1) > .form-control__label').should('contain' , 'Name')




    

    
    
    
    
    })
    
    

})

