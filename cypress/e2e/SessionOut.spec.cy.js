/// <reference types="cypress" />


    
    it('Login to Vault From Login page', ()=>{
        cy.visit('https://testoba.beta.futurevault.com/')
        cy.wait(5000)

      cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
        if ($ele.is(":enabled")) {
            cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+vh+mrc14+1@gmail.com')
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

    })
})


        it('Login user from session out page', ()=>{
           cy.visit('https://testoba.beta.futurevault.com/')
           cy.wait(5000)
    
          cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').then(($ele) => {
            if ($ele.is(":enabled")) {
                cy.get(':nth-child(1) > .form-control__input-wrapper > .form-control__input > .form-control').type('asrimen79+vh+mrc14+1@gmail.com')
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

        })
              //Log out from User account

             cy.get('.navbar__profile-wrapper').click()
             cy.wait(5000)
             cy.get('[aria-label="Logout"]').click()
             cy.get('.button').should('contain' , 'Login')
   

})
    



