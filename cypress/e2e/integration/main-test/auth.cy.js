import AuthPage from '../../../helpers/funcitons/Authorization'
const page = new AuthPage();

describe("Authorization-Test", () => {
  beforeEach('Начало теста', () => {
    cy.visit('');

  })
  it("Exists elements of page", () => {
    page.logoPolymatica.should('exist').and('be.visible');
    page.logoDescription.should('exist').and('contain.text', ' Конструктор информационных панелей ');
    page.login.should('exist').and('have.attr', 'placeholder', 'Логин')
    page.login.type('321', { force: true })
    page.login.should('have.value', '321')
    page.password.should('exist').and('have.attr', 'placeholder', 'Пароль')
    page.password.type('123', { force: true })
    page.password.should('have.value', '123')
    page.eye_button.should('exist').and('be.visible')
    page.eye_button.click({ force: true })
    page.eye_button.should('have.attr', 'aria-label', 'Hide password')
    page.rememberPassword.should('exist').and('contain.text', ' Запомнить ')
    page.rememberPassword_label.should('exist')
    page.rememberPassword_label.check({ force: true })
    page.rememberPassword_label.should('have.attr', 'aria-checked', 'true')
    page.enterButtonText.should('contain.text', ' Войти ')
    page.enterButton.should('exist')
    page.enterButton.click({ force: true })
    page.wrongLoginOrPassword.should('exist').and('contain.text', ' Неверный логин или пароль ')
    page.wrongLoginOrPassword.should('have.css', 'color', 'rgb(242, 66, 53)')
    page.passwordRecovery.should('exist').and('contain.text', ' Восстановление пароля ')
    page.passwordRecoveryDescription.should('exist').and('contain.text', ' Укажите свою почту, мы вышлем инструкцию для восстановления пароля ')
    page.recoveryButton.click({force:true})
    page.recoveryButtonErorMessage.should('exist').and('have.css', 'color', 'rgb(242, 66, 53)')
    page.emailInputError.should('have.css', 'border-bottom-color', 'rgb(242, 66, 53)')
    page.email_label.should('exist').and('contain.text', 'E-mail')
    page.emailInput.should('exist').and('have.attr', 'placeholder', 'Введите свою почту')
    page.emailInput.type('123', { force: true })
    page.recoveryButtonText.should('exist').and('contain.text', ' Восстановить ')
    page.recoveryButton.click({ force: true })
    page.backArrow.should('exist').and('be.visible')
    page.backArrow.click()
    page.body_title.should('exist').and('contain.text', ' Войти ');
    page.copyRight.should('exist').and('contain.text', '© 2011-2021, ООО Полиматика Рус')
  })
})