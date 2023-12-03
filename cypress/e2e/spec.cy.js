describe('Acesso ao sistema de teste', () => {
  beforeEach(() => {
    cy.visit('https://www.panvel.com/panvel/login/entrar');
  });

  it('Validar a tela de login', () => { 
    cy.title().should('eq', 'Login - Panvel Farmácia');
  });

  it('Preencher o formulário de login', () => {
    cy.once('uncaught:exception', () => false);
    cy.get('#username').type('03117956093');
    cy.wait(1000);
    cy.get('#mat-input-1').type('Teste@123');
    cy.wait(10000);
    cy.get(`[type="submit"]`).eq(0).click();
    cy.wait(3000);
    cy.get(`[placeholder="O que você precisa hoje?"]`).eq(0).type('Aspirina')
    cy.get(`[aria-label="pesquisar produto"]`).eq(0).click();
    cy.wait(3000);
    cy.get(`[src="https://cdn1.staticpanvel.com.br/cdn_service/svg/tags/add-cart-new.svg"]`).eq(0).click();
    cy.wait(1000);
    cy.get('.button-add-cart').eq(0).click();
    cy.wait(1000);
    cy.get(`[aria-label="abrir carrinho"]`).eq(0).click();
    cy.get('.items-buy').eq(0).click();
    cy.get('.items-buy').eq(0).click();
    cy.wait(1000);
    cy.get(`[type="radio"]`).eq(1).click();
    cy.wait(1000);
    cy.get('.delivery-route').eq(0).click();
    cy.wait(1000);
    cy.get('.items-buy').eq(0).click();
    cy.get('.checked').eq(0).click();
    cy.get('.items-buy').eq(0).click();
    cy.visit('https://www.panvel.com/panvel/cliente/pedidos/listar');
  });

});