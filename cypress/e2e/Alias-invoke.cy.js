describe("Alias and Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      // .invoke("text")
      .as("productThumbNail");

    // cy.get('@productThumbNail').its('length').should('be.gt', 5)
    cy.get("@productThumbNail").then((name) => {
      cy.log(name.text());
    });

    it.only("Validate a specific hair care product", () => {
      cy.visit("https://www.automationteststore.com");
      cy.get(".thumbnail").as("productThumbNail");
      cy.get("@productThumbNail").its("length").should(16);
      cy.get(".pricetag jumbotron")
        .children.eq(0)
        .should("have.property", "title")
        .and("contain", "Add to Cart");
    });
  });
});
