describe('segundo teste', () => {
  it('clique no link', () => {
    cy.visit('https://uol.com')

    cy.contains('type').click()
  })
})
