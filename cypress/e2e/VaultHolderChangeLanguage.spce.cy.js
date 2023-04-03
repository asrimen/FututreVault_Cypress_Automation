




it('Vault User click on Appearance and Change the Language' ,() => {

    cy.visit('https://gta.beta.futurevault.com/')

    cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+vh+dec6+grp0@gmail.com')
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
    cy.get('.button').click()

    cy.get('.dashboard__header-title').should('contain', 'Welcome, Rimen Vault')
    cy.get('.navbar__profile-wrapper').click()           //Click on Welcome Menu List 
    cy.get('[aria-label="Account Settings"]').click() 
    cy.get('[href="/settings/appearance"]').click()
    cy.get(':nth-child(2) > .appearance-language__bottom').click()
    cy.get('.settings__sidebar-title').should('contain' , 'Réglages') 
    cy.get(':nth-child(1) > .appearance-language__bottom').click()  //Again change to english
    cy.get('.settings__sidebar-title').should('contain' , 'Setting')


    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')







  })
