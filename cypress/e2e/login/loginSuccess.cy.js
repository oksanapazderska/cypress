describe('My Login application', () => {
  beforeEach(() => {
    cy.intercept('https://298279967.log.optimizely.com/event?a=298279967&d=298279967&y=false&n=https%3A%2F%2Fthe-internet.herokuapp.com%2Flogin&u=oeu1696238142867r0.9991517523074807&wxhr=true&t=1696238142870&f=298349752,318188263', {
      "version": "4"
    })
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('should login with valid credentials', () => {
    cy.get('input[name="username"]').type('tomsmith')
    cy.get('input[name="password"]').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  })
})
