const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     //specPattern: [
      // 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      // 'cypress/support/QIMApages/BO_CERT/**/*.cy.js',
      // 'cypress/support/QIMApages/FE_ACA/**/*.cy.js'
     //],
  },
});


