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



it('Check Remider page and Create Reminder/Edit Reminder/Delete Reminder',() =>{
  

        
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
                
        cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')

        cy.contains('Reminders').click() //CLick on Reminder page 

        cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click()  //Click on Create New Reminder button


        cy.get('form > :nth-child(1) > :nth-child(2)').type('Cypress Reminder')

        cy.get('form > :nth-child(1) > :nth-child(3)').type('This is Cypress message')
        cy.get('.react-datepicker__input-container > .form-control').click()
         
       // Select date from calender  
        cy.get('.react-datepicker__navigation').click()   // Select Next month 

        cy.get(':nth-child(5) > .react-datepicker__day--027').click()
        cy.get('.react-datepicker__time-list > :nth-child(29)').click()


        cy.get('.button__primary').click()

        cy.get('.toast').should('contain','Successfully created reminder')
        cy.get('.page-toolbar__title').should('contain','Reminders')

        //Edit Reminders 

        cy.contains('General').click()
        cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()
        cy.get('[aria-label="Edit Reminder"]').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').select('Reporting')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').clear().type('Update Reminders')
        cy.get('.react-datepicker__input-container > .form-control').click()
        cy.get('.react-datepicker__navigation--next').dblclick()
        cy.get(':nth-child(5) > .react-datepicker__day--028').click()
        cy.get('.react-datepicker__time-list > :nth-child(32)').click()
        cy.get('.button__primary').click()
        cy.get('.toast').should('contain','Successfully updated reminder')

        //Delete Reminders 

        cy.contains('Reporting').click()
        cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()
        cy.get('[aria-label="Delete Reminder"]').click()
        cy.get('.swal2-confirm').click()
        cy.get('.toast__message').should('contain','Successfully removed reminder')










        })

})