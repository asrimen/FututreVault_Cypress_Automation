
/// <reference types="cypress" />

import 'cypress-file-upload';


const visitUrl = 'https://testoba.beta.futurevault.com/';
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 



  beforeEach(() => {
    
    cy.visit(visitUrl);
     // If session out page comes then click on Logout Button 


  })
  


it('Upload File in sub-category',() => {

  cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
    if ($ele.is(":enabled")) {
        cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+vh+oct6+test@gmail.com')
        cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
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

    //Select Sponsor categories and subcategories 

    cy.contains('Backoffice').dblclick()
    cy.contains('Summary').dblclick()



 
    // Upload File in All documents page area 

    //cy.get('[aria-label="Upload Documents"]').attachFile('../fixtures/Test.png');
        cy.wait(5000)

        cy.get('.icon-view__container').attachFile('Test2.pdf', { subjectType: 'drag-n-drop' });
        
        cy.get('.progress-queue__header').should('contain', 'Uploaded 1 of 1 documents')
  


    })
     
  })

    it('Preview Pdf file from all categories page',() => {

      cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
        if ($ele.is(":enabled")) {
            cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+vh+oct6+test@gmail.com')
            cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
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
    
        //Select Sponsor categories and subcategories 
    
        cy.contains('Backoffice').dblclick()
        cy.contains('Summary').dblclick()


        //Click on Pdf file and preview the file
         
        cy.contains('Test2').dblclick()
        
        cy.get('.document__tab--active > .document__tab-title').should('contain' , 'Test2')




       
    })

  })



