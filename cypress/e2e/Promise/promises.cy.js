describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://www.automationteststore.com");
    cy.get("a[href$='contact']").then(($name) => {
      const navName = $name.text();
      cy.log("Link name is : " + navName);
    });
  });
});
