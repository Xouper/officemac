import {AuthorizationPage} from "../../helpers/pages/authorization"
const page = new AuthorizationPage()

describe('Authorization Test', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it(('Wrong pass or login'), ()=> {
        cy.fixture('passwords.json').then((p) => {
            page.passwordInput = p.wrongPass["password"]
            page.emailInput = p.wrongPass['login']
            page.loginButton.click({force:true})
            page.errorMessage.should('exist')
            .and('be.visible')
            .and('contain.text', 'Неверный логин или пароль')
        })
    })
    it(('Pass less 6'), () => {
        cy.fixture('passwords.json').then((p) => {
            page.passwordInput = p.passLess6['password']
            page.emailInput = p.passLess6["login"]
            page.loginButton.click({force: true})
            page.errorMessage.should('exist')
            .and('be.visible')
            .and('contain.text', ' Поле должно содержать минимум 6 символов')
        })
    })
    it(("Login need be filled"),() => {
        page.passwordInput = '123456'
        page.loginButton.click({force:true})
        page.errorMessage.should('exist')
        .and('be.visible')
        .and('contain.text', 'Поле обязательно для заполнения')
    })
    it(("Password need be filled"),() => {
        page.emailInput = '123456'
        page.loginButton.click({force:true})
        page.errorMessage.should('exist')
        .and('be.visible')
        .and('contain.text', 'Поле обязательно для заполнения')
    })
    it(("Both fields need be filled"), () => {
        page.loginButton.click({force:true})
        page.errorMessage.should('exist')
        .and('be.visible')
        .and('contain.text', 'Поле обязательно для заполнения')
    })
    it(('Pass more 20'), () => {
        cy.fixture('passwords.json').then((p) => {
            page.passwordInput = p.passMore20['password']
            page.emailInput = p.passMore20["login"]
            page.loginButton.click({force: true})
            page.errorMessage.should('exist')
            .and('be.visible')
            .and('contain.text', 'Поле не должно содержать более 20 символов')
        })
    })
    it(('Wrong name of email'), ()=> {
        page.forgotPassword.click({force:true})
        page.title.should('contain.text', "Восстановление пароля")
        page.forgotPasswordInput = '@mail.ru'
        page.forgotPasswordSubmit.click({force:true})
        page.errorMessage.should('exist')
        .and('be.visible')
        .and('contain.text', ' Ошибка в адресе')
    })
    it(('Wrong domain of email'), ()=> {
        page.forgotPassword.click({force:true})
        page.title.should('contain.text', "Восстановление пароля")
        page.forgotPasswordInput = '1'
        page.forgotPasswordSubmit.click({force:true})
        page.errorMessage.should('exist')
        .and('be.visible')
        .and('contain.text', ' Ошибка в адресе')
    })
    it(('Mail should be filled'), ()=> {
        page.forgotPassword.click({force:true})
        page.title.should('contain.text', "Восстановление пароля")
        page.forgotPasswordSubmit.click({force:true})
        page.errorMessage.should('exist')
        .and('be.visible')
        .and('contain.text', 'Поле обязательно для заполнения')
    })
})