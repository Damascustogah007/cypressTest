describe("Drag and drop", () => {
  it("Should navigate to the scroll page", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Should drag and drop draggable items", () => {
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable").trigger('mousemove').trigger('mousedown', {force:true})
  });
});
