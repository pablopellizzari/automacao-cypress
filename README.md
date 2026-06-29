# Automação Cypress - Sauce Demo

Projeto de automação de testes E2E desenvolvido com Cypress, utilizando o site [Sauce Demo](https://www.saucedemo.com/) como aplicação base.

O objetivo deste projeto é praticar a criação de cenários automatizados, organização de testes e documentação técnica para compor um portfólio voltado para QA.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress
- Sauce Demo

## Funcionalidades testadas

Atualmente, o projeto cobre cenários de login e adição de produtos ao carrinho.

### Login

#### LOGIN-01 - Login com sucesso

**Dado** que o usuário acessa a URL `https://www.saucedemo.com/`  
**Quando** informa credenciais válidas  
**Então** o login deve ser realizado com sucesso e o usuário deve ser redirecionado para a página de inventário: `https://www.saucedemo.com/inventory.html`

#### LOGIN-02 - Login com credenciais inválidas

**Dado** que o usuário acessa a URL `https://www.saucedemo.com/`  
**Quando** informa credenciais inválidas  
**Então** o login não deve ser realizado e o sistema deve exibir uma mensagem de erro visível.

### Adição de produto ao carrinho

#### CART-01 - Adição de produto pela tela principal

**Dado** que o usuário realizou login e está na URL `https://www.saucedemo.com/inventory.html`  
**Quando** o usuário clica no botão "add to cart"   
**Então** o ícone do carrinho deve acrescentar 1 produto no contador do carrinho e
        o produto deve ser adicionado corretamente no carrinho e
        o botão "Add to cart" deve se transformar no botão "remove"


#### CART-02 - Adição de produto pela tela do produto

**Dado** que o usuário realizou login e está na URL `https://www.saucedemo.com/inventory.html`  
**Quando** o usuário clica no botão "Add to cart" dentro da tela do produto específico `https://www.saucedemo.com/inventory-item.html?id=(id do produto)`   
**Então** o ícone do carrinho deve acrescentar 1 produto no contador do carrinho e
        o produto deve ser adicionado corretamente no carrinho e
        o botão "Add to cart" deve se transformar no botão "Remove"





## Como executar o projeto

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalar dependências

```bash
npm install
```

### Abrir o Cypress em modo interativo

```bash
npm run cy:open
```

### Executar os testes em modo headless

```bash
npm run cy:run
```

## Estrutura do projeto

```text
cypress/
  e2e/
    login.cy.js
  fixtures/
  support/
    commands.js
    e2e.js
cypress.config.js
package.json
README.md
```


## Próximos cenários planejados

- Validar login com usuário bloqueado.
- Validar login com campos obrigatórios vazios.
- Validar remoção de produto do carrinho.
- Validar fluxo inicial de checkout.
- Validar ordenação de produtos.

## Status do projeto

Projeto em desenvolvimento, com novos cenários de teste sendo adicionados progressivamente.
