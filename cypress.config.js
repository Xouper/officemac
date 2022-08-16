const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1512,
  viewportHeight: 982,
  e2e: {
    baseUrl: 'https://dev.platform.polymatica.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
