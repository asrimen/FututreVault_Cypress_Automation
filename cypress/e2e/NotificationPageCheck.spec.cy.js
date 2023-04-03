




   it('Notification page verify' ,() => {



    cy.visit('https://gta.beta.futurevault.com/')
    //cy.get('.token-refresh-modal__form-subtext > a').click()
    cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com')
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
    cy.get('.button').click()
    cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')
    
    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button

    cy.get('[href="/settings/notifications"]').click() // Click on Notification page
    cy.get('.page-toolbar__title').should('contain' , 'Notifications') // Verify Notification Page
    
    
    //Log out from User account

    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain' , 'Login')






 })


 it('Check and Unchecked Notification check box and update notification checkbox' ,() => {

    cy.visit('https://gta.beta.futurevault.com/')
    cy.get('.token-refresh-modal__form-subtext > a').click()
    cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com')
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
    cy.get('.button').click()
    cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')

    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button

    cy.get('[href="/settings/notifications"]').click() // Click on Notification page
    cy.get('.page-toolbar__title').should('contain' , 'Notifications') // Verify Notification Page

    //cy.get('form > :nth-child(2) > :nth-child(2)').click()
    //cy.get('form > :nth-child(4) > :nth-child(3)').click()
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .toggle').click()
    cy.get('.button').click()



   // cy.get('.toast__message').should('contain' , 'Successfully updated notification preferences')


        //Log out from User account

        cy.get('.navbar__profile-wrapper').click()
        cy.get('[aria-label="Logout"]').click()
        cy.get('.button').should('contain' , 'Login')






  })





