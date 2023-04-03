 /// <reference type="cypress" 


it('Login as a Trusted Advisor and check client LIst ', function()

{
       cy.visit('https://gta.beta.futurevault.com/')
       cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
        if ($ele.is(":enabled")) {
            cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+ta+nov29+1@gmail.com')
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
    
    cy.get('.page-toolbar__title').should('contain', 'Client List')

     //LogOut From TA user account
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    


})
})

it('TA login user and accesss into Vault user account', function()

{
    cy.visit('https://gta.beta.futurevault.com/')

    cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
     if ($ele.is(":enabled")) {
         cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+ta+nov29+1@gmail.com')
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


    //Access Into Vault account 
    cy.get(':nth-child(2) > .smart-table__table-row > [style="flex: 1 1 21.4286%;"]').dblclick()
    cy.get('.dashboard__header-title').should('contain','Welcome')

     //LogOut From TA user account
     cy.get('.navbar__profile-wrapper').click()
     cy.get('[aria-label="Logout"]').click()
     cy.get('.button').should('contain','Login')


})

  
})







