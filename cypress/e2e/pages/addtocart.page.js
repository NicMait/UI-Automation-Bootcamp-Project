class AddToCart{

	get heelsAddToCart () { return ('div:nth-child(2) > div:nth-child(3) > div:nth-child(16) > button:nth-child(3)')}
	get cart () { return ('.snipcart-cart__content')}
	get cartSummary () {return ('.snipcart-cart-header__title')}
	get cartTotal () { return ('.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large')}
	get exitCart () { return ('div[class="snipcart-cart__secondary-header"] button')}
	get continueShopping () { return ('.snipcart-modal__close-title')}


 addToCart(){
 cy.get(this.heelsAddToCart).scrollIntoView()
     cy.wait(2500)
 cy.get(this.heelsAddToCart).click()



}

}



export default new AddToCart()