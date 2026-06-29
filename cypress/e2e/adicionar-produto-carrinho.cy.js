describe('Adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Adiciona produto no carrinho com sucesso pela tela principal', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
  })

  it('Adiciona produto no carrinho com sucesso pela tela de produto', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="item-4-img-link"]').click()
    cy.url().should('include', '/inventory-item.html')
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="remove"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
  })

})