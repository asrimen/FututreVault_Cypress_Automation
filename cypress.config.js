const { defineConfig } = require("cypress");



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 50000,
  e2e: {

    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //cy.viewport(1024,768)
      require('cypress-mochawesome-reporter/plugin')(on);   // For HTML reports  


    },


    
  },
});
