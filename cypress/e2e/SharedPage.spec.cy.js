
// <reference types="cypress" />

it('Shared File and page verification ' ,()=>{


    cy.visit('https://gta.beta.futurevault.com/')

    //cy.session('https://gta.beta.futurevault.com/')
  
    cy.get('form > :nth-child(1) > :nth-child(1)').type('starshadow005+19dec+vhh@gmail.com').click()
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Trupal1234')
    cy.get('.button').click()
    //cy.get('.page-toolbar__title').should('contain' , 'Client List')
    cy.wait(5000)
    cy.get('.dashboard__header-title').should('contain' , 'Welcome')


    //cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link').click()

    cy.contains('Shared').click()
    cy.get('.page-toolbar__title').should('contain' , 'Shared')
    cy.get('.page-tab--active').should('contain','Shared With Others')

    cy.get('[href="/shared/me"]').click()
    cy.get('[href="/shared/me"]').should('contain' , 'Shared With Me')
    
    //Shared file open 

    cy.get('[href="/shared/others"]').click()
    cy.wait(5000)
    cy.get('[href="/shared/others"]').should('contain' , 'Shared With Others')

    cy.contains('TestShared').dblclick()
    cy.get(':nth-child(1) > .form-control__label').should('contain' , 'Name')

    //Check All shared Action button pages
    cy.get('.sidebar__dropdown-children-group > :nth-child(3) > .sidebar__link').click() // CLick on Shared Tab 
    cy.contains('TestShared').click()  //Click on Shared file 
    cy.get('.page-toolbar__title').should('contain' , 'Shared')

    //click on Action Button 
    cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click()   // Click on Action button
    cy.get('[aria-label="Preview"]').click()   // Click on Previw button 
    cy.get('[aria-label="Close"]').click()    //Close the pdf close button
    cy.get('.page-tab--active').should('contain' , 'Shared With Others')


    cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click()
    cy.get(':nth-child(3) > .dropdown__list-item').click() // Click on shared button
    cy.get('.modal__close').click()


    cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click() // CLick on Action 
    cy.get(':nth-child(4) > .dropdown__list-item').click() //Click on Download button
    cy.get('.toast').should('contain' , 'Downloading')
    cy.get('.toast__message').should('contain' , 'TestShared downloaded')



    //LogOut From TA user account
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    





    


})