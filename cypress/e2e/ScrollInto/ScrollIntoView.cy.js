describe("Test Mouse Actions ", () => {
  it("Scroll element into view", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});
