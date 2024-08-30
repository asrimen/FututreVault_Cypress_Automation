/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+dec6+grp0@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

  
  beforeEach(() => {
    cy.visit(visitUrl);
  });



it('Create New Reminders',() =>{
  

        
        cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
                if ($ele.is(":enabled")) {
                    cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email)
                    cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password)
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


        // Create New Reminders

        cy.contains('Reminders').click() //CLick on Reminder page 

        cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click()  //Click on Create Reminder button
        cy.wait(5000)

    

        cy.get('.modal__body-content > form > :nth-child(1) > :nth-child(2)').click().
        type('Cypress Reminder')

        cy.get('form > :nth-child(1) > :nth-child(3)').click().type('This is Cypress message')

        cy.get('.react-datepicker__input-container > .form-control').click()
         
       // Select date from calender  
       //cy.get('.react-datepicker__input-container > .form-control').dblclick()   // Select Next month 
        
       cy.get('.react-datepicker__header-wrapper > :nth-child(4)').click()
       cy.get('.react-datepicker__day--028').click()
        
        
        cy.get('.button__info').click()

        cy.get('.toast').should('contain','Successfully created reminder')
        cy.get('.page-toolbar__title').should('contain','Reminders')

            //Log out from User account

      cy.get('.navbar__profile-wrapper').click()
      cy.get('[aria-label="Logout"]').click()
      cy.get('.button').should('contain' , 'Login')

   })
  })


        it('Edit Created Reminders',() =>{
  

          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
                  if ($ele.is(":enabled")) {
                      cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email)
                      cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password)
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

        cy.contains('Reminders').click()
        cy.contains('General').click()
        //cy.get('[data-id="66d02ccf2e9b535e95e1627b"] > .smart-table__table-row > [style="flex: 1 1 38.4615%;"]').click()  // Select Reminder 
        cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()   //Click on Action button

        cy.get('[aria-label="Edit Reminder"]').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').select('Reporting')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Update Reminders')
        cy.tab()
          .type('Cypress Update message')
        

        cy.get('.react-datepicker__input-container > .form-control').click()

        cy.get('.react-datepicker__header-wrapper > :nth-child(4)').click()
        cy.get('.react-datepicker__day--028').click()

        

        


        cy.get('.button__info').click()
        cy.get('.toast').should('contain','Successfully updated reminder')

           //Log out from User account

      cy.get('.navbar__profile-wrapper').click()
      cy.get('[aria-label="Logout"]').click()
      cy.get('.button').should('contain' , 'Login')


    })
  })



        it('Delete Reminders',() =>{
  

        
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
                  if ($ele.is(":enabled")) {
                      cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email)
                      cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password)
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


    
        cy.contains('Reminders').click()
        cy.wait(5000)
        cy.contains('Cypress Reminder').click()
          
        cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()
        cy.get('.dropdown__list-item--error').click()
        cy.get('.swal2-confirm').click()
        cy.get('.toast__message').should('contain','Successfully removed reminder')

          


             //Log out from User account

      cy.get('.navbar__profile-wrapper').click()
      cy.get('[aria-label="Logout"]').click()
      cy.get('.button').should('contain' , 'Login')





        })

})

