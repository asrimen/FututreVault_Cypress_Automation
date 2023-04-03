


 it('Login as a Sponsor admin and Verify sponsor admin and access into clinet User',() => {

  
    cy.visit('https://gta.beta.futurevault.com/')

    //cy.session('https://gta.beta.futurevault.com/')
  
    cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+admin+dec6@gmail.com	').click()
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
    cy.get('.button').click()
    cy.get('.page-toolbar__title').should('contain' , 'Client List')

    cy.get(':nth-child(3) > .smart-table__table-row > :nth-child(3)').dblclick() // Click on Vault user
    cy.get('.dashboard__header-title').should('contain','Welcome')

    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
  
    
  
  })


  

  it('Sponsor admin access into vault and Verify vault user pages',()=> {



    cy.get('form > :nth-child(1) > :nth-child(1)').type('asrimen79+admin+dec6@gmail.com	').click()
    cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
    cy.get('.button').click()
    cy.get('.page-toolbar__title').should('contain' , 'Client List')
    cy.get(':nth-child(3) > .smart-table__table-row > :nth-child(3)').dblclick() // Click on Vault user
    cy.get('.dashboard__header-title').should('contain','Welcome')
    cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link').click()



     
  
  
  
  })

 
