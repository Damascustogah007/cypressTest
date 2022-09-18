const login = () => {
  cy.fixture("challenge").then((data) => {
    globalThis.data = data;
  });
  cy.get("#name").type(data.name);
  cy.get("#email").type(data.email);
  cy.get("#pass").type(data.password);
  cy.get("#agree").check();
  cy.contains("SIGN UP").click();
};

module.exports = { login };
