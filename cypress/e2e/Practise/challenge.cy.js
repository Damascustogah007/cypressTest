// import { login } from "../Practise/helper";
const baseUrl = "https://letcode.in/";

describe("New Challenge", () => {
//   before(() => {
//     cy.fixture("challenge").then((data) => {
//       globalThis.data = data;
//     });
//   });
//   beforeEach(() => {
//     // cy.viewport(1366, 768);
//   });

  it("Should sign up user", () => {
    cy.visit(baseUrl);
    cy.contains("Sign up").click({ force: true });
    cy.url().should("include", "signup");
  });

  it("Should enter users credentials", () => {
    let name = Cypress.env("name");
    let email = Cypress.env("email");
    let pass = Cypress.env("pass");
    let check = Cypress.config('env')
    cy.log(check)
    // login();
    //cy.login('charles', "Charles.togah@gmail.com", "123456Aa_");
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#pass").type(pass);
    cy.get("#agree").check();
    cy.contains("SIGN UP").click();
    // cy.screenshot()
  });
});
