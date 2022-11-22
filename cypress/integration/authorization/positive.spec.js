import {AuthorizationPage} from "../../helpers/pages/authorization"
const page = new AuthorizationPage()

describe('Authorization Test', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Check elements of page', () => {
    page.title.should('be.visible').and('contain.text', 'Авторизация')
    page.emailLabel.should('be.visible').and('contain.text', 'Email')
    page.emailInput.should('have.attr', 'placeholder', 'Введите свою почту')
    page.passwordLabel.should('be.visible').and('contain.text', 'Пароль')
    page.passwordInput.should('be.visible').and('have.attr', 'placeholder', 'Пароль')
    page.eyeButton.should('exist').and('be.visible')
    page.loginButtonText.should('be.visible').and('contain.text', 'Вход')
    page.forgotPassword.should('contain.text', 'Забыли пароль?').and('be.visible')
  })
  it ('Perfomance of main page', () => {
    page.emailInput = 'qwe123'
    page.emailInput.should('have.value', 'qwe123')
    page.passwordInput = '123456'
    page.passwordInput.should('have.value', '123456')
    page.passwordInput.should('have.attr', 'type', 'password')
    page.eyeButton.click()
    page.passwordInput.should('have.attr', 'type', 'text')
  })
  it('Perfomance of forgot password page', () => {
    page.forgotPassword.click()
    page.title.should('contain.text', 'Восстановление пароля')
    page.forgotPasswordLabel.should('be.visible').and('contain.text', 'Email')
    page.forgotPasswordInput.should('be.visible').and('have.attr', 'placeholder', 'Введите свою почту')
    page.forgotPasswordInput = '123@bk.ru'
    page.forgotPasswordInput.should('have.value', '123@bk.ru')
    page.forgotPasswordDescription.should('contain.text', 'На ваш e-mail будут отправлены инструкции для восстановления пароля')
    page.forgotPasswordSubmitText.should('contain.text', 'Отправить пароль')
    page.backArrow.should('exist').and('be.visible')
    page.backArrow.click()
    page.title.should('be.visible').and('contain.text', 'Авторизация')
  })
  
})