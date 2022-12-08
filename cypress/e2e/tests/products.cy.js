import Authentication from '../pages/authentication.page'
import Products from '../pages/products.page'

describe('Product Gallery', () => {
	beforeEach(() => {
			cy.visit('/')
		})


		it.skip('View Product Details', () => {

			// Login with valid credentials
      cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//View details of a products
      cy.get(Products.hat).should('be.visible')
			cy.get(Products.hat).click()
			cy.url().should('contain', 'quality-hat')
			cy.get(Products.hatName).should('be.visible')


	})

	 it.skip('Add a product to favorites', () => {

		// Login with valid credentials
     cy.get('#signInOrRegister').should('be.visible')
		 cy.get('#signInOrRegister').click()
     Authentication.login('marsenal2@yopmail.com', 'Password123!')

		//Add a product to favorites
		 cy.get(Products.favIcon).click()
		 cy.get(Products.favCount).should('have.text','Favorites [1]')

 })

   it.skip('Remove a product from favorites', () => {

	// Login with valid credentials
		// Login with valid credentials
    cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
    Authentication.login('marsenal2@yopmail.com', 'Password123!')

		//Add a product to favorites
		cy.get(Products.favIcon).click()
		cy.get(Products.favCount).should('have.text','Favorites [1]')

		//Remove a product from favorites
		cy.get(Products.favCount).should('be.visible')
		cy.get(Products.favCount).click()
		cy.url().should('contain', 'favorites')
		cy.get(Products.favHeader).should('be.visible')
		cy.get(Products.favHeader).should('have.text', 'Favorites')
		cy.get(Products.removeFave).should('be.visible')
		cy.get (Products.removeFave).click()
		cy.get(Products.favCount).should('have.text','Favorites [0]')


 })

 it('Search for a product by full name', () => {

	// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

	//Search for a specific product
	  cy.get(Products.searchBar).should('be.visible')
		cy.get(Products.searchBar).type('Red Couch')
		cy.get(Products.redCouch).should('be.visible')



 })

})
