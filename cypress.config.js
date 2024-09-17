const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cicero.oslo.no', // Define la URL base
    viewportWidth: 1280,               // Configura el ancho del visor
    viewportHeight: 720,               // Configura la altura del visor
    setupNodeEvents(on, config) {
      // Puedes definir eventos adicionales aquí
    },
  },
});
