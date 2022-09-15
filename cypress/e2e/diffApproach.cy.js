describe("Navigatinon", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    cy.title().should("eq", "Contact Us");

    //Uses cypress command and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstName = text.find("#field_11").text();
      expect(firstName).to.contain("First name");
    });
    //Embedded commands closure
    cy.get("#field_11").then((fnText) => {
      cy.log(fnText.text());
    });
  });
});
