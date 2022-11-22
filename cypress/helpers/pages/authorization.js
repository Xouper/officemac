export class AuthorizationPage {
    get title() {
        return cy.get('.title')
    }
    get email() {
        return cy.get('sl-input[name="username"]')
    }
    get emailLabel() {
        return this.email.shadow().find('label').first()
    }
    get emailInput() {
        return this.email.shadow().find('input[name = "username"]')
    }
    set emailInput(str) {
        this.emailInput.type(str, {force:true})
    }
    get password() {
        return cy.get('sl-input[name="password"]')
    }
    get passwordLabel() {
        return this.password.shadow().find('label').first()
    }
    get passwordInput() {
        return this.password.shadow().find('input[name="password"]')
    }
    set passwordInput(str) {
        this.passwordInput.type(str, {force:true})
    }
    get eyeButton() {
        return this.password.shadow().find('button')
    }
    get footer() {
        return cy.get('.common-footer')
    }
    get loginButtonText() {
        return this.footer.find('sl-button[type="submit"]')
    }
    get loginButton() {
        return this.footer.find('sl-button[type="submit"]').shadow().find('button')
    }
    get forgotPassword() {
        return this.footer.find('sl-button[variant="text"]')
    }
    get forgotPasswordEmail() {
        return cy.get('app-forgot').find('sl-input')
    }
    get forgotPasswordLabel() {
        return this.forgotPasswordEmail.shadow().find('label')
    }
    get forgotPasswordInput() {
        return this.forgotPasswordEmail.shadow().find('input')
    }
    set forgotPasswordInput(str) {
        this.forgotPasswordInput.type(str, {force:true})
    }
    get forgotPasswordDescription() {
        return cy.get('.description')
    }
    get forgotPasswordSubmit() {
        return this.footer.find('sl-button[type="submit"]').shadow().find('button')
    }
    get forgotPasswordSubmitText() {
        return this.footer.find('sl-button[type="submit"]')
    }
    get backArrow() {
        return cy.get('sl-icon[name="chevron-left"]')
    }
    get errorMessageAuth() {
        return cy.get('.auth-error')
    }
    get errorMessage() {
        return cy.get('.error')
    }
}