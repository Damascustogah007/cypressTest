describe("Iterate over all elements", () => {
  it("Log information of all hair product", () => {
    cy.visit("https://www.automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
      cy.log("index: " + index + " : " + $el.text());
    });
  });
  it("Add specific product to basket", () => {
    cy.visit("https://www.automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el) => {
      //   if ($el.text() == "Seaweed Conditioner") {
      //     cy.wrap($el).click();
      //   }
      if ($el.text().includes("Seaweed Conditioner")) {
        cy.wrap($el).click();
      }
    });
  });
  it.only("Looping through book and validating the highest price", () => {
    cy.visit("https://www.automationteststore.com");
    // cy.get("a[href*='product/category&path=']").contains("Books").click();
    // cy.get(".oneprice").each(($price) => {
    //   cy.log($price.text());
    // });
    cy.get(".thumbnail").as("thumbnail");
    cy.get("@thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
    var itemsTotal = 0;
    var salesTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      for (var i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log("Non sale price items total: " + itemPriceTotal);
    });
    cy.get("@saleItemPrice").then(($linkText) => {
      var salesPriceTotal = 0;
      var salesPrice = $linkText.split("$");
      for (var i = 0; i < salesPrice.length; i++) {
        cy.log(salesPrice[i]);
        salesPriceTotal += Number(salesPrice[i]);
      }
      salesTotal += salesPriceTotal;
      cy.log("Sales total: " + salesTotal);
    });
  });
});
