describe("Sign up", () => {
  // let email = "marioTester+" + new Date().getTime() +"@gmail.com"
  before(() => {
    cy.visit("http://automationpractice.com/index.php");
    cy.fixture("signup").then((data) => {
      globalThis.data = data;
    });
  });
  it("Should sign up user", () => {
    cy.get("a[title='Log in to your customer account']").click();
    cy.url().should("include", "my-account");
    cy.get("#email_create").type(data.email);
    // cy.get("#email_create").type(email);
    cy.get("#SubmitCreate").click({ force: true });
  });
});
