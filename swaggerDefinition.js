// swaggerDefinition.js
const swaggerDefinition = {
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'API Description',
    },
    basePath: '/',
  };
  
  const options = {
    swaggerDefinition,
    apis: ['router/*.js'], // Path to the API routes folder
  };
  
  module.exports = options;
  