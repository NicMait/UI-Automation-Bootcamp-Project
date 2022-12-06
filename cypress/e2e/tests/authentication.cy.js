import Authentication from '../pages/authentication.page'
import  faker from '.../@faker-js/faker';

describe('Authentication', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Register a new user with email', () => {
			// Register using email
			const email = faker.email.email();
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
			cy.get(Authentication.signUp).should('be.visible')
			cy.get(Authentication.signUp).click()
			cy.get('[type=email]').type(email);
			cy.get('[type=password]').type('Password123!')
			cy.get(Authentication.signUpBtn).should('be.visible')
			cy.get(Authentication.signUpBtn).click()
			cy.get (Authentication.banner).should('be.visible')
			cy.get (Authentication.banner).should('have.text', "Automation Camp Store")

	// it('Verify email', () => {
	// 			// Register using email
	// 		const email = faker.email.email();
	// 		cy.get('#signInOrRegister').should('be.visible')
	// 		cy.get('#signInOrRegister').click()
	// 		cy.get(Authentication.signUp).should('be.visible')
	// 		cy.get(Authentication.signUp).click()
	// 		cy.get('#email').type(email);
	// 		cy.get('[type=password]').type('Password123!')
	// 		cy.get(Authentication.signUpBtn).should('be.visible')
	// 		cy.get(Authentication.signUpBtn).click()
	// 		cy.get (Authentication.banner).should('be.visible')
	// 		cy.get (Authentication.banner).should('have.text', "Automation Camp Store")



	})
})