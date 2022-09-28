// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (name, email, password) => { 
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#agree").check();
    cy.contains("SIGN UP").click();
})

// Cypress.Commands.add('dataCy', (value) => {
//     return cy.get(`[data-cy=${value}]`)
//   })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })