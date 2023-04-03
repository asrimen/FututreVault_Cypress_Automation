


it('Notification page verify' ,() => {



    cy.visit('https://gta.beta.futurevault.com/')
    
    cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com')
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
    cy.get('.button').click()
    cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')
    
    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button

    //cy.get('[href="/settings/security"]').click() // Click on Security page
    cy.get('[href="/settings/information"]').click() // Click on Information page

    cy.get('.page-toolbar__title').should('contain' , 'Information') // Verify Information page
    cy.get('.information__grid-wrapper > :nth-child(1) > :nth-child(1)').should('contain' , 'Your Package Settings')
    cy.get('.information__grid-wrapper > :nth-child(1) > :nth-child(3)').should('contain' , 'Storage')
    cy.get(':nth-child(2) > .settings__section-title').should('contain', 'Click on the link below to read our:')







        //Log out from User account

        cy.get('.navbar__profile-wrapper').click()
        cy.get('[aria-label="Logout"]').click()
        cy.get('.button').should('contain' , 'Login')
    




})
