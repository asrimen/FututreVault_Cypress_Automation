/// <reference types="cypress" />


it('Download pdf file from sponsor category',() => {

    cy.visit("https://testoba.beta.futurevault.com/login")

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

      //Click on Download link and download pdf file

      cy.get('.document-body-details-download > .document-link').click()

      cy.get('.toast__message').should('contain' , 'Test2(10) downloaded')

      


    })
})


