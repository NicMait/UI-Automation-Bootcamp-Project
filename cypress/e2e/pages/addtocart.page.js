class AddToCart{

	get heelsAddToCart () { return (':nth-child(16) > #add-to-cart')}
	get cart () { return ('.snipcart-cart__content')}
	get cartSummary () {return ('.snipcart-cart-header__title')}
	get cartTotal () { return ('.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large')}


 addToCart(){
 cy.get(this.heelsAddToCart).scrollIntoView()
     cy.wait(1500)
 cy.get(this.heelsAddToCart).click()



}

}



export default new AddToCart()