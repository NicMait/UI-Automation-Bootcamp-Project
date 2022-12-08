import Authentication from '../pages/authentication.page'
import Sort from '../pages/sort.page'

describe('Sort By Price', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('should sort product from A to Z', () => {
		//login with a valid user
	  	cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')



	 //sort from A to Z
		cy.get(Sort.sortContainer).select('aToZ')
		// 	var priceList = ['$15.99', '$29.99', '$15.99', '$49.99', '$9.99', '$7.99']
		//  priceList.sort()
		// 	cy.get('.inventory_item_price').each(($elem, index) => {
			//     expect($elem.text()).equal(priceList[index])
			// })
	})

	// it('should sort product prices from high to low', () => {
	// 	//login with a valid user
	// 	cy.get('#user-name').type('standard_user')
	// 	cy.get('#password').type('secret_sauce')
	// 	cy.get('#login-button').click()

	// 	//sort low to high
	// 	cy.get('.product_sort_container').select('lohi')
	// 		var productPrice = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']
	// 		productPrice.sort().reverse()
	// 		cy.get('.inventory_item_price').each(($elem, index) => {
	// 				// expect($elem.text()).equal(productPrice[index])
	// 		})

	//  })
	})