/// <reference types="cypress" />

const visitUrl = 'https://gta.beta.futurevault.com/'; 
// const visitUrl = 'https://testoba.beta.futurevault.com/'; 
const loginCred = {
  'vh':{
    'email':'asrimen79+vh+dec6+grp0@gmail.com', // Login vault user 
    'password':'Rimen1234'
 
  }
};

  
  beforeEach(() => {
    cy.visit(visitUrl);

    cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
        if ($ele.is(":enabled")) {
            cy.get('form > :nth-child(1) > :nth-child(1)').type(loginCred.vh.email);
            cy.get('form > :nth-child(1) > :nth-child(2)').type(loginCred.vh.password);
            cy.get('.button').click()
            cy.wait(5000)  
        }
        else
        {
            cy.get('form > :nth-child(1) > :nth-child(2)').type('Rimen1234')
            cy.get('.button').click()
            cy.wait(5000) 
            cy.contains('Welcome,').should('contain', 'Welcome,')
        }
  
    })

})


it('Vault User Login and Select Different View ' ,() => {

    cy.get('.sidebar__dropdown-children-group > :nth-child(1) > .sidebar__link').click()
    cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()
    cy.get('[aria-label="Icon View"]').click() // Select Icon View 
    cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()
    cy.get('[aria-label="Tile View"]').click() // Select Tile View 
    cy.get('.page-toolbar__children-wrapper > :nth-child(2)').click()
    cy.get('[aria-label="List View"]').click()
    cy.get('[style="flex: 1 1 33.3333%;"] > .button').should('contain' , 'Name')


  
    }) 




      it('Vault User go to Unfiled page and Click on all actions ' ,() =>{

        cy.get(':nth-child(2) > .sidebar__link').click() //click on Unfiled link 


        cy.get('[data-id="63a5c8d2c1852a6229121f37"] > .smart-table__table-row > .smart-table__table-td--checkbox').dblclick() //Click on documents file and preview the files
        cy.get('.document-body-details-history > .document-link').should('contain' , 'History')
        cy.get('.document-body-details-history > .document-link').click() // Click on Reminder History Tab
        cy.get('.modal__close').click()  // Select by class Id and close the module 
        cy.get('.modal__title').should('contain' , 'History')
        cy.wait(5000)
        cy.get('.document-body-details-download > .document-link').click()
        cy.get('.toast__message').should('contain' , 'downloaded')    //Click on Download link and Download unfiled file.
        cy.wait(5000)

        cy.get('.multiselect > .button').click()
        

        cy.get('.multiselect__selected-list-search-input').click()
        cy.get('[aria-label="Approved"]').click()
        cy.get('form > :nth-child(1) > :nth-child(4)').type('This is Test documents for notes update')
        cy.get('.button--block').click()






        
        



        
          

    




      })


    

    


