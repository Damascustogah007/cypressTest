describe('Testing', () => {
  beforeEach(() => {
    cy.visit('https://www.automationteststore.com');
  });
  it('Validate a specific hair care product', () => {
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    cy.get('.fixed_wrapper .prdocutname')
      .eq(0)
      // .invoke("text")
      .as('productThumbNail');

    // cy.get('@productThumbNail').its('length').should('be.gt', 5)
    cy.get('@productThumbNail').then((name) => {
      cy.log(name.text());
    });
  });
});
