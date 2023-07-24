/// <reference types="cypress" />



function invoiceId_alpha_numeric(length){
    let text='';
    var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for(var i=0; i<length; i++)
    {
      text +=  characters.charAt(Math.floor(Math.random()* charactersLength));
    }
     return text;
}

it('FutureVault Admin login and create new sponsor',() => {

    cy.visit('https://admin-k8s.dev.futurevault.com/')
    cy.visit('https://admin.beta.futurevault.com/')

    cy.get(':nth-child(1) > .form-control').type('asrimen79@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('Pass1234')
    cy.contains('Login').click()
    cy.get('.page-header').should('contain' , 'Vault Holders')

    cy.get('#LeftNavigation > .nav > :nth-child(8) > a').click()
    cy.get('.page-header').should('contain', 'Sponsors')
    cy.get('.text-center > .btn').click()
    //cy.get('h1').should('contain' , 'Sponsor Configuration')

    const value =invoiceId_alpha_numeric(2)

    cy.get('.panel-body > :nth-child(1) > .form-control').type(value+'Sponsor')  // Enter sponsor Name

    // Check all Feature Checkboxes

    cy.contains('Checklist').click()
    cy.get(':nth-child(3) > label > input').click()
    cy.get(':nth-child(4) > label > input').click()
    cy.contains('Review Enabled').click()
    cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > label').click()
    cy.get(':nth-child(3) > :nth-child(2) > label').click()

    // Profile checkbox select 

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > label').click()

    cy.get('.col-sm-5 > .form-control').type('100')

    cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('100')
    cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('100')
    cy.get('.row.undefined > :nth-child(1) > .form-control').type(100)
    cy.get('.row.undefined > :nth-child(2) > .form-control').type(9847363234)
    
    cy.get(':nth-child(6) > .form-control').type(value+'sponsor')
    cy.get(':nth-child(7) > .form-control').type(value+'sponsor')
    cy.get(':nth-child(8) > .form-control').select('Canada')

     // Host URL Type 
    cy.get(':nth-child(9) > .form-control').type('https://').type((value)+'.beta.futurevault.com')

    cy.get(':nth-child(10) > .form-control').type('Gulshan1/road 119')
    cy.get(':nth-child(11) > .form-control').type('asrimen79+test@gmail.com')
    cy.get(':nth-child(12) > .form-control').type('https://futurevault.freshdesk.com/support/home/test')
    cy.get(':nth-child(13) > .form-control').type('©2023 FutureVault - All Rights Reserved.')
    cy.get(':nth-child(14) > .form-control').type(value+'Sponsor')
    cy.get(':nth-child(15) > .form-control').type(value+'@gmail.com')
    cy.get('.input-group > .form-control').type('Dashboard')
    cy.get('.row.form-group > :nth-child(1) > .form-control').select('Mr.')

    cy.get('.row.form-group > :nth-child(2) > .form-control').type(value+'Rimen')
    cy.get('.row.form-group > :nth-child(3) > .form-control').type(value+'Last')

    cy.get(':nth-child(19) > label > input').click()
    
    cy.get('.btn-primary').click()

    cy.get('strong').should('contain','Success!')

    




     


    
})

  


  

