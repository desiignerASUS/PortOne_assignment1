const { defineConfig } = require("cypress");
//const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {
  screenshotOnRunFailure=true; //FOR HTML REPORTS
  require('cypress-mochawesome-reporter/plugin')(on);  //FOR HTML REPORTS
  //on('file:preprocessor', cucumber())
  //implement node event listeners here
  return config;
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',     //FOR GENERATING HTML REPORT
  e2e: {
    setupNodeEvents,
    //you have to provide the path of the test script //will be stored as specPattern
    specPattern: 'cypress/Integration/example/*.js',
    //specPattern: 'cypress/UAT/features/*.{js,feature}',
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    env:{
      OrangeHRM:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      RahulShettyAutomationPractice:"https://rahulshettyacademy.com/"
    }
  },
  chromeWebSecurity: false
});
