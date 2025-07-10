const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",         // <- ✔️ reconoce el archivo de soporte
    specPattern: "cypress/e2e/**/*.cy.js"          // <- ✔️ reconoce tus tests
  }
});
