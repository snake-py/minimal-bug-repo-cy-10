import './commands';
require('cypress-terminal-report/src/installLogsCollector')();
// Set configs
Cypress.config({
    defaultCommandTimeout: Cypress.env('CY_TIMEOUT'),
    baseUrl: Cypress.env('CY_BASE_URL'),
    responseTimeout: Cypress.env('CY_TIMEOUT'),
    requestTimeout: Cypress.env('CY_TIMEOUT'),
});

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false,
});
