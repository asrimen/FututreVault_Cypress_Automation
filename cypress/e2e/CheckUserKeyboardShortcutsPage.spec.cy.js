


it('Check Vault User Keyboard shoortcuts Page and verify page',() =>{

cy.visit('https://gta.beta.futurevault.com/')

cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com')
cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
cy.get('.button').click()
cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')

cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
cy.get('[aria-label="Account Settings"]').click()   // Click on Profile Setting button
cy.get('.page-toolbar__title').should ('contain' , 'Profile')
cy.get('[href="/settings/shortcuts"]').click() // CLick on Shourtcuts Tab 
cy.get('.page-toolbar__title').should('contain' , 'Keyboard Shortcuts')

//Log out from User account

cy.get('.navbar__profile-wrapper').click()
cy.get('[aria-label="Logout"]').click()
cy.get('.button').should('contain' , 'Login')





})


