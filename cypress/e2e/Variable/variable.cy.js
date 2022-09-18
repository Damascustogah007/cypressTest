// describe("Variables", () => {
//   it("how to use variables", () => {
//     cy.visit("https://www.automationteststore.com");
//     const makeUpLink = cy
//       .get("a[href*='product/category&path=']")
//       .contains("Makeup");
//     makeUpLink.click();
//     cy.url().should("contain", "path=36");
//     cy.title().should("eq", "Makeup");

//     const skinCareLink = cy
//       .get("a[href*='product/category&path=']")
//       .contains("Skincare");
//     skinCareLink.click();
//     cy.url().should("contain", "path=43");
//     cy.title().should("eq", "Skincare");
//   });
// });
