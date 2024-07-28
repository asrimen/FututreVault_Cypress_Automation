/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 
// const visitUrl = 'https://gta.beta.futurevault.com/''; 
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+dec6+grp0@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

context('Create a new contact', () => {
  beforeEach(() => {
    cy.visit(visitUrl);
  });
  

  //Random Email Create Functions 

  function invoiceId_alpha_numeric(length){
    let text='';
    var characters="asrimen798645";
    var charactersLength = characters.length;
    for(var i=0; i<length; i++)
    {
      text +=  characters.charAt(Math.floor(Math.random()* charactersLength));
    }
     return text;
  }
  it('Create New contact', { 
    
    
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
    cy.get('.sidebar__list > :nth-child(4) > .sidebar__link').click() //Click +Sign for create a contact
    cy.get('.page-toolbar__children-wrapper > :nth-child(1)').click() //Clicko on add Contact
    cy.get('.contacts-form__wrapper > :nth-child(1) > :nth-child(1)').type('Rimen+1{enter}')
    cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').click().type('Sarker{enter}')

    const value =invoiceId_alpha_numeric(6)   // Random Email create with this value. 
    
    cy.get(':nth-child(1) > .form-group > .form-control__wrapper > .form-control__input-wrapper > .form-control__input > .form-control').type(value+'@gmail.com')
    cy.get('.button__info').click()
    cy.get('.swal2-cancel').click()
    cy.get('.navbar__profile-wrapper').click()
    cy.get('[aria-label="Logout"]').click()
    cy.get('.button').should('contain','Login')


  })
})

  it('Update Contact Information',() => {

    cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
      if ($ele.is(":enabled")) {
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+vh+ref4@gmail.com')
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
      

      //Click on contact page 
      
      cy.get('.sidebar__list > :nth-child(4) > .sidebar__link').click()
      cy.get(':nth-child(9) > [style="flex: 1 1 26.6667%;"] > .smart-table__text-ellipsis').dblclick()
      cy.get('.profile__header-toolbar-button-wrapper > .button__info').click()
      cy.get('.profile__input-column-inner--general > :nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('Rimen up')  // First Name update 
      cy.get(':nth-child(2) > .form-control__input-wrapper > .form-control__input > .form-control').type('Cypress')   // Middle Nanme update 
      cy.get(':nth-child(3) > .form-control__input-wrapper > .form-control__input > .form-control').type('Cy name')   // Last Name update 



      cy.get('.profile__header-toolbar-button-wrapper > .button__info').click()
      cy.get('.toast__message').should('contain','Successfully updated contact profile')



      //Log out from User account

      cy.get('.navbar__profile-wrapper').click()
      cy.get('[aria-label="Logout"]').click()
      cy.get('.button').should('contain' , 'Login')
  



  })
  })
})
