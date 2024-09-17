const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cicero.oslo.no', // Definer basis-URL-en
    viewportWidth: 1280,               // Angi bredden på skjermen
    viewportHeight: 720,               // Angi høyden på skjermen 
    setupNodeEvents(on, config) {
      // Du kan definere flere hendelser her
    },
  },
});
