

describe('login', () => {
  it('realiza o login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('realiza o login com credenciais inválidas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_souce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
  })
})
