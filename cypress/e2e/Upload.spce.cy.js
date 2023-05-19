
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
    cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()
    cy.get('[aria-label="Icon View"]').click()
    
    //Upload file with attached 
    //cy.get('.icon-view__container').rightclick({ force: true }) //  Click Mouse Right site 
  

 
    // Upload File in All documents page area 

    //cy.get('[aria-label="Upload Documents"]').attachFile('../fixtures/Test.png');
        cy.wait(5000)

        cy.get('.icon-view__container').attachFile('Test2.pdf', { subjectType: 'drag-n-drop' });
        
        cy.get('.progress-queue__header').should('contain', 'Uploaded 1 of 1 documents')

       
        
       
     //LogOut From TA user account
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    

    })

    
    
    
    })
    
    



  })

