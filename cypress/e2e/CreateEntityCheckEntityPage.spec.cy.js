/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'starshadow005+07vault+newad@gmail.com', // Login vault user 
    'password':'Trupal1234'
 
  }
};

  
  beforeEach(() => {
    cy.visit(visitUrl);
  });


it('Create Entity and verify created entity and entity page',() =>{


  cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
      if ($ele.is(":enabled")) {
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email)
          cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password)
          cy.get('.button').click()
          cy.wait(5000)  
      }
      else
      {
          cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Trupal1234')
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

    cy.contains('Add New Entity').click()
    cy.wait(500)
    cy.get('.form-control__wrapper--error > .form-control__input-wrapper > .form-control__input > .form-control').type('Cypress Entity')

    cy.get('.form-group > :nth-child(3)')  // Select Entity Name from Dropdown List
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
      

      cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
          if ($ele.is(":enabled")) {
              cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email)
              cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password)
              cy.get('.button').click()
              cy.wait(5000)  
          }
          else
          {
              cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Trupal1234')
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
        cy.get('[action="#"] > .form-group > :nth-child(2)').clear().type('Cypress update') // Update New Entity Names

        cy.get('.form-group > :nth-child(3)')  // Select Entity Name from Dropdown List
        cy.get('.form-group > :nth-child(3)').select("Person")
        .invoke("val")

        cy.get('.button__primary').click()
        cy.get('.toast').should('contain' , 'Successfully updated entity')  // Verify Toast message 

        







    })


     })
    