import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When(`I log in`, () => {
    cy.loginWith({username: 'tomsmith', password: 'SuperSecretPassword!'})
})

Then(`the url is {word}`, (url) => {
    cy.url()
      .should('eq', `${url}`)
})

Then(`I'm logged in`, () => {
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
})
