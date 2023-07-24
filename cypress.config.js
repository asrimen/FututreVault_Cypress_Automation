const { defineConfig } = require("cypress");



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 50000,
  //pageLoadTimeout:40000,
  //baseUrl: 'https://gta.beta.futurevault.com/',
   
  e2e: {

    
    setupNodeEvents(on, config) {
      // implement node event listeners here

     // cy.viewport(1280, 720);

      require('cypress-mochawesome-reporter/plugin')(on);   // For HTML reports  


    },
     
    
      "viewportWidth": 1380,
      "viewportHeight": 720
    
    
  },
});
