Cypress.Commands.add('loginWith', ({ username, password }) =>
    cy.visit('https://the-internet.herokuapp.com/login')
        .get('input[name="username"]').type(username)
        .get('input[name="password"]').type(password)
        .get('button[type="submit"]').click()
)
