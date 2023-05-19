/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+dec6+grp0@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  },
  'sponsorAdmin' : {
    'email': 'asrimen79+admin+gta+feb2@gmail.com',
    'password': 'Rimen1234'

  },

   'SponsorRep' : {
     'email': 'asrimen79+rep+nov3+3@gmail.com',
     'password': 'Rimen1234'

    },
    'trustedAdvisor' : {
      'email': 'asrimen79+ta+nov29+1@gmail.com',
      'password': 'Rimen1234'
  
    },
  
  'GTA' : {
    'email': 'asrimen79+gta+janu19+1@gmail.com',
    'password': 'Rimen1234'

  },
 

'CV' : {
  'email': 'starshadow005+cv+31oct@gmail.com',
  'password': 'Trupal1234'

},


};

  
  beforeEach(() => {
    cy.visit(visitUrl);
  });



it('Login as a Vault and Log out',()=>{

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


  cy.get('.dashboard__header-title').should('contain','Welcome, Rimen Vault')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')

})
})


it('Login as a Sponsor admin and Verify sponsor admin and Log out',() => {

  

  cy.get('.token-refresh-modal__form-subtext > a').click()
  cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.sponsorAdmin.email)
  cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.sponsorAdmin.password)
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'Clients')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')

  

})


it('Login as a Sponsor Rep and Verify sponsor Rep and Log out',() => {


  cy.get('.token-refresh-modal__form-subtext > a').click()               / 
  cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.SponsorRep.email)
  cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.sponsorAdmin.password)
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'Clients')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')


})



it('Login as a Trusted advisor and Verify Trusted Advisor user and Log out',() => {


  cy.get('.token-refresh-modal__form-subtext > a').click()
  cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.trustedAdvisor.email)
  cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.trustedAdvisor.password)
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'Clients')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')


})

 
it('Login as a GTA and Verify GTA  user and Log out',() => {


  cy.get('.token-refresh-modal__form-subtext > a').click()
  cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.GTA.email)
  cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.GTA.password)
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'Clients')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')


})

it('Login as a CV  and verify CV user and Log out',() => {


  cy.get('.token-refresh-modal__form-subtext > a').click()
  cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.CV.email)
  cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.CV.password)
  cy.get('.button').click()
  cy.get('.page-toolbar__title').should('contain' , 'All Documents')
  cy.get('.navbar__profile-wrapper').click()
  cy.get('[aria-label="Logout"]').click()
  cy.get('.button').should('contain','Login')
  


})




