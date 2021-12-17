/* eslint-disable no-undef */
describe("example breaking bad", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Go to Catalog", () => {
    cy.get("button").contains("Catalog").click();
  });

  it("Change showing Catalog", () => {
    cy.get("button").contains("Catalog").click();
    cy.get("button[id='lines']").click();
    cy.get("button[id='tiles']").click();
  });

  it("Showing person", () => {
    cy.get("button").contains("Catalog").click();
    cy.get("a[href='/person/2']").click();
  });

  it("Search person", () => {
    cy.get("button").contains("Catalog").click();
    cy.get("input").type("Sky").type("{enter}");
  });

  it("Go back to catalog", () => {
    cy.get("button").contains("Catalog").click();
    cy.get("a[href='/person/3']").click();
    cy.get("a[href='/catalog']").click();
  });

  it("Change page", () => {
    cy.get("button").contains("Catalog").click();
    cy.get("button").contains("3").click();
    cy.get("button[id='next']").click();
  });

  it("Change persons on page", () => {
    cy.get("button").contains("Catalog").click();
    cy.get("button[id='b5']").click();
  });

  it("Error search person", () => {
    cy.get("button").contains("Catalog").click();
    cy.get("input").type("XXX").type("{enter}");
    cy.get("a[href='/catalog']").click();
  });
});
