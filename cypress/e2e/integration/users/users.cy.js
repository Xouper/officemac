import { beforeEachTest } from '../../../helpers/before-each'
import UserPage from '../../../helpers/funcitons/userPage'
import UserModal from '../../../helpers/funcitons/Modal'
const page = new UserPage()
const obj = new UserModal()

describe("AutoAuthorization", () => {
  let hatTable = [
    'Фамилия',
    'Имя',
    'Отчество',
    'Логин',
    'E-mail',
    'Дата создания',
    'Дата изменения',
    'Действия',
  ];
  let mass = [
    'last_name',
    'first_name',
    'middle_name',
    'email',
    'password',
    'username',
  ];
  beforeEach('Начало теста', () => {
    beforeEachTest('/setting/user-list/')
  })
  it("Exists elements of page", () => {
    page.title.should('exist').and('be.visible')
    page.title.should('contain.text', 'Пользователи')
    page.addUser.should('exist').and('be.visible')
    page.addUser.should('contain.text', 'Добавить пользователя')
    page.table.should('exist').and('be.visible')
    page.headOfTable.should('exist').and('be.visible')
    page.checkHeadRows(hatTable)
    page.compareTableString(
      'test123',
      require('../../../fixtures/mocks/users/user-list.json'),
    )
    page.settingOfUser.should('exist').and('be.visible')
    page.deleteUser.should('exist').and('be.visible')
    page.pagination.should('not.be.visible')
  })

  it("ModalWindow", () => {
    const create = page.viewCreate
    create.title.should('have.attr', 'open')
    create.title.should('have.attr', 'label', 'Пользователь')
    create.header.should('contain.text', 'ФИО')
    create.loginText.should('contain.text', 'Логин')
    create.passwordText.should('contain.text', 'Пароль')
    create.email.should('contain.text', 'E-mail')
    create.lastname.should('contain.text', 'Фамилия')
    create.firstname.should('contain.text', 'Имя')
    create.role.should('contain.text', 'Роль в системе')
    create.chooseRoleHolder.should('exist').and('be.visible')
    create.roleToggler.should('exist').and('be.visible')
    create.superUser.should('exist').and('be.visible')
    create.superUserCheckbox.should('exist')
    create.nameOfGroup.should('exist').and('be.visible')
    create.addGroup.should('exist').and('be.visible')
    create.addGroup.shadow().find('button').should('have.css', 'color', 'rgb(0, 174, 213)')
    create.cancel.should('exist').and('not.be.disabled')
    create.add.should('exist').and('not.be.disabled')
  })
  it('CreateUser', () => {
    const create = page.viewCreate
    create.login = 123
    create.login.should('have.value', '123')
    create.password = 123
    create.passwordEye.click()
    create.passwordEye.should('have.attr', 'aria-label', 'Hide password')
  })
})