describe('Primeiro teste', () => {
  it('visite o site', () => {
    cy.visit('http://localhost:3000/contato')

    cy.get('input[name=nome]')
    cy.get('input[name=telefone]')
    cy.get('input[name=email]')
    cy.get('select[name=cidade]')
    cy.get('textarea[name=mensagem]')
  })
})
