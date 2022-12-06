import Authentication from '../pages/authentication.page'

describe('Authentication', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Login valid user', () => {
			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
			cy.get('[type=email]').type('marsenal2@yopmail.com');
			cy.get('[type=password]').type('Password123!')
			cy.get(Authentication.signUpBtn).should('be.visible')
			cy.get(Authentication.signUpBtn).click()
			cy.get (Authentication.banner).should('be.visible')
			cy.get (Authentication.banner).should('have.text', "Products")
	})

	it('Log in with invalid password', () => {
		// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		cy.get('[type=email]').type('marsenal2@yopmail.com');
		cy.get('[type=password]').type('notTrue123!')
		cy.get(Authentication.signUpBtn).should('be.visible')
		cy.get(Authentication.signUpBtn).click()
		cy.get (Authentication.errorMsg).should('be.visible')
		cy.get (Authentication.errorMsg).should('have.text','WRONG EMAIL OR PASSWORD')

		// cy.get (Authentication.banner).should('be.visible')
		// cy.get (Authentication.banner).should('have.text', "Products")
})



})