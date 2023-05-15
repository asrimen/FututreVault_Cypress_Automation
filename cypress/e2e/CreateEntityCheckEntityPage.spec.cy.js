/// <reference types="cypress" />


it('Create Entity and verify created entity and entity page',() =>{

  cy.visit('https://gta.beta.futurevault.com/')
  cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
      if ($ele.is(":enabled")) {
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+vh+janu19+1@gmail.com')
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
      
cy.get('.dashboard__header-title').should('contain', 'Welcome,')
    
    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button
    cy.get('.page-toolbar__title').should ('contain' , 'Profile')

      //Click on Entity Page 
    cy.get('[href="/settings/entities"]').click()
    cy.get('.page-toolbar__title').should('contain','Entities')

    cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click()
    cy.get('.form-group > :nth-child(2)').type('Cypress Entity')

    cy.get("select")  // Select Entity Name from Dropdown List
      .select("Film")
      .invoke("val")

    
    cy.get('.button__primary').click()
    cy.get('.toast').should('contain','Successfully created entity')
    
    //Log out from User account

    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain' , 'Login')




    })
  })
    

     it('Update Entity and save successfully',() => {
      cy.visit('https://gta.beta.futurevault.com/')
      cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
          if ($ele.is(":enabled")) {
              cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+vh+janu19+1@gmail.com')
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


        cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
        cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button
        cy.get('.page-toolbar__title').should ('contain' , 'Profile')


        //Click on Entity Page 
        cy.get('[href="/settings/entities"]').click()
        cy.get('.page-toolbar__title').should('contain','Entities')
      
        cy.get(':nth-child(2) > .smart-table__table-td--checkbox').dblclick()
        cy.get('[action="#"] > .form-group > :nth-child(2)').type('Cypress update') // Update New Entity Names

        cy.get('.form-group > :nth-child(3)')  // Select Entity Name from Dropdown List
        .select("Film")
        .invoke("val")

        cy.get('.button__primary').click()
        cy.get('.toast').should('contain' , 'Successfully updated entity')  // Verify Toast message 

        







    })


     })
    