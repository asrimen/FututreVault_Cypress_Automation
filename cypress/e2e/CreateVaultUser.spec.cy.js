/// <reference types="cypress" />

const visitUrl = 'https://testoba.beta.futurevault.com/'; 
// const visitUrl = 'https://taxontest1.dev.futurevault.com/'; 

// Funcation For Random Email. 

function invoiceId_alpha_numeric(length){
  let text='';
  var characters="asrimen79";
  var charactersLength = characters.length;
  for(var i=0; i<length; i++)
  {
    text +=  characters.charAt(Math.floor(Math.random()* charactersLength));
  }
   return text;
}


const loginCred = {
  'vh':{
    'email':'asrimen79+admin+private+sep23+grp0@gmail.com	', // Login Sponsor admin user 
    'password':'Rimen1234'
 
  }
};

context('Login sponsor admin user', () => {
  beforeEach(() => {
    cy.visit(visitUrl);
  });
  
  it('Create New Vault User', { 

    
    
    }, () => {
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
    
    //Click on Create New Vault

    cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click()
    cy.get('form > :nth-child(1) > .form-group > :nth-child(1)').type('Cypress')
    cy.get('form > :nth-child(1) > .form-group > :nth-child(2)').type('Auto vault')

    //Funcional Script for Random Emails

    const value =invoiceId_alpha_numeric(6)
    cy.get('form > :nth-child(1) > :nth-child(2)').type(value+'@gmail.com')

       //.type('{enter}') 
       cy.tab()
      .type('1234') // Reference number set 
    cy.tab()     
       //.type('{tab}')
       .select("Personal") // Package selecte from list.
    cy.tab()
       .select('A1') // Tamplate select from list.


      cy.get('[type="checkbox"]').check({force:true})
      // Send Activation Email checked 

      cy.contains('Save').click()
        .wait(6000)

        cy.get('.toast__message').should('contain','Successfully created a vault')

        cy.get('.navbar__profile-text').click()

        cy.contains('Logout').click()
        cy.get('.button').should('contain','Login')




    })
  })

})

