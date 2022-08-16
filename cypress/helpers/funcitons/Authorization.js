class AuthPage {
    get logoPolymatica() {
        return cy.get('.container .logo sl-icon[name = logo]');
    }
    get logoDescription() {
        return cy.get('.logo-description');
    }
    get body_title() {
        return cy.get('.title');
    }
    get login_label() {
        return cy.get('sl-input[name="username"]').shadow().find('label[class="form-control__label"]');
    }
    get login() {
        return cy.get('sl-input[name="username"]').shadow().find('#input');
    }
    get login_box() {
        return cy.get('sl-input[name="username"]').shadow().find('.input');
    }
    get password_label() {
        return cy.get('sl-input[name="password"]').shadow().find('label[class="form-control__label"]');
    }
    get password() {
        return cy.get('sl-input[name="password"]').shadow().find('#input');
    }
    get passwordCondition() {
        return cy.get('sl-input[name="password"]').shadow().find('div[part="base"]')
    }
    get password_box() {
        return cy.get('sl-input[name="password"]').shadow().find('.input');
    }
    get eye_button() {
        return cy.get('sl-input[name="password"]').shadow().find('button[type="button"]');
    }
    get rememberPassword() {
        return cy.get('sl-checkbox[name="is_remember"]')
    }
    get rememberPassword_label() {
        return cy.get('sl-checkbox[name="is_remember"]').shadow().find('input[type="checkbox"]')
    }
    get enterButtonText() {
        return cy.get('sl-button[type="submit"]')
    }
    get enterButton() {
        return cy.get('sl-button[type="submit"]').shadow().find('button');
    }
    get wrongLoginOrPassword() {
        return cy.get('div[class="auth-error error"]')
    }
    get forgotPassword() {
        return cy.get('sl-button[variant="text"]')
    }
    get forgotPasswordButton() {
        return cy.get('sl-button[variant="text"]').shadow().find("button")
    }
    get passwordRecovery() {
        return cy.get('.title')
    }
    get passwordRecoveryDescription() {
        return cy.get('.common-description')
    }
    get recoveryButtonErorMessage() {
        return cy.get('div[class="error message"]')
    }
    get emailInputError() {
        return cy.get('sl-input[name="username"]').shadow().find('div[class="input input--medium input--standard input--empty"]')
    }
    get email_label() {
        return cy.get('sl-input[name="username"]').shadow().find('slot[name="label"]')
    }
    get emailInput() {
        return cy.get('sl-input[name="username"]').shadow().find('#input')
    }
    get recoveryButtonText() {
        return cy.get('sl-button[type="submit"]')
    }
    get recoveryButton() {
        return cy.get('sl-button[type="submit"]').shadow().find('button')
    }
    get backArrow() {
        return cy.get('sl-icon[name="arrow-left"]')
    }
    get copyRight() {
        return cy.get('.copyright')
    }
}
export default AuthPage