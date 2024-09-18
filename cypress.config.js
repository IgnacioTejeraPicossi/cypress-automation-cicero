const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://cicero.oslo.no', // Definer basis-URL-en Prod
    baseUrl: 'http://localhost:3000/no', // Angi URL for lokal installasjon
    viewportWidth: 1280,               // Sett skjermstørrelse (bredde)
    viewportHeight: 720,               // Sett skjermstørrelse (høyde) 
    setupNodeEvents(on, config) {
      // Du kan definere flere hendelser her
    },
  },
});
