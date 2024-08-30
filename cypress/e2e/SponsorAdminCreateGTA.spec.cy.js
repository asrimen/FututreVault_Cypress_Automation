/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 


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

//const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+admin+grp0+aug4@gmail.com', // Login sponsor admin user 
    'password':'Rimen1234'
 
  }
};

  
  beforeEach(() => {
    cy.visit(visitUrl);
  });

it('Login as Sponsor admin GTA user and Logout' , () => {

}, () => {


       
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
   
       cy.contains('Users').click()   //Click on Users Tab
       cy.get('.page-toolbar__title').should('contain','Users')  // User page check 
       cy.wait(5000)
       cy.contains('Add New User').click()
       cy.wait(5000)
       cy.get('.modal__title').should('contain','Add New User')
       cy.get('.form-group--column > :nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control')
         .select('Trusted Collaborator')

      cy.wait(5000)
      
      cy.get('.form-group--column > .form-group > :nth-child(1)').type('GTA CY')
      cy.get('.form-group--column > .form-group > :nth-child(2)').type('Rimen')



      const value =invoiceId_alpha_numeric(9) // Type Random Email 
      cy.get('.form-group--column > :nth-child(3)').click().type(value+'@gmail.com')
      cy.get('.form-group--column > :nth-child(4)').type('GTA Created')
      cy.contains('Select All').click()
      cy.wait(5000)
      cy.get('.button__info').click()
      cy.wait(5000)
      cy.get('.swal2-cancel').click()
      
      //Logout From this User
      cy.get('.navbar__profile-wrapper').click()
      cy.get('[aria-label="Logout"]').click()
      cy.get('.button').should('contain','Login')

      

  

  
})
})




