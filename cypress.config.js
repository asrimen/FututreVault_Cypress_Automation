const { defineConfig } = require("cypress");



module.exports = defineConfig({
  defaultCommandTimeout: 50000,
  e2e: {

    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //cy.viewport(1024,768)

    },


    
  },
});
