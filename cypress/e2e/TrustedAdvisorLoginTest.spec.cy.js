 /// <reference type="cypress" 



 const visitUrl = 'https://gta.beta.futurevault.com/';
 // const visitUrl = 'https://testoba.beta.futurevault.com/'; 
 const loginCred = {
   'vh':{
     'email':'asrimen79+ta+nov29+1@gmail.com', // Login vault user 
     'password':'Rimen1234'
  
   }
 };
 
 context('Upload file in all documents page are', () => {
   beforeEach(() => {
     
     cy.visit(visitUrl);
      // If session out page comes then click on Logout Button 
 
 
   });




it('Login as a Trusted Advisor and check client LIst ', function()

{
       

       cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
        if ($ele.is(":enabled")) {
            cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email);
            cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password);
            cy.get('.button').click()
            cy.wait(5000)  
        }
        else
        {
            cy.get('.token-refresh-modal__form-subtext > a').click()
            cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen1234')
            cy.get('.button').click()
            cy.wait(5000) 
        }
    
    cy.get('.page-toolbar__title').should('contain', 'Clients')

     //LogOut From TA user account
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')
    


})
})

it('TA login user and accesss into Vault user account', function()

{
    

    cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
     if ($ele.is(":enabled")) {
         cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.email);
         cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type(loginCred.vh.password);
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

    cy.get(':nth-child(2) > .smart-table__table-row > :nth-child(2)').dblclick()
    cy.get('.dashboard__header-title').should('contain','Welcome')

     //LogOut From TA user account
     cy.get('.navbar__profile-wrapper').click()
     cy.get('[aria-label="Logout"]').click()
     cy.get('.button').should('contain','Login')


})

  
})
})





