const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1512,
  viewportHeight: 982,
  e2e: {
    baseUrl: 'http://192.168.40.172:30080/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}"
  },
});
