class Authentication{

	get signInRegisterBtn () { return ('#signInOrRegister')}
	get signUp () { return ('div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')}
	get emailField () { return ('[type=email]')}
	get passwordField () { return ('[type=password]')}
	get signUpBtn () { return ('[type=submit]')}
	get banner () { return ('.chakra-heading.css-1jhlc8u')}
	get errorMsg () { return ('.auth0-global-message.auth0-global-message-error')}



	login(email, password){
		cy.get(this.emailField).type(email)
		cy.get(this.passwordField).type(password)
		cy.get(this.loginBtn).click()

	}
}

export default new Authentication()