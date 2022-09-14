import { beforeEachTest } from '../../../helpers/before-each'
import { Notifications } from '../../../helpers/funcitons/Notifications'
import UserPage from '../../../helpers/funcitons/userPage'
const page = new UserPage()
const notify = new Notifications()

describe("AutoAuthorization", () => {
  let hatTable = ['Фамилия','Имя','Отчество','Логин','E-mail','Дата создания','Дата изменения','Действия',];
  let mass = ['last_name','first_name','middle_name','email','password','username',];
  let names = ['Фамилия', 'Имя', 'Отчество', 'E-mail', 'Пароль', 'Логин'];
  beforeEach('Начало теста', () => {
    beforeEachTest('/setting/user-list/');
  })
  it("Exists elements of page", () => {
    page.title.should('exist').and('be.visible');
    page.title.should('contain.text', 'Пользователи');
    page.addUser.should('exist').and('be.visible');
    page.addUser.should('contain.text', 'Добавить пользователя');
    page.table.should('exist').and('be.visible');
    page.headOfTable.should('exist').and('be.visible');
    page.checkHeadRows(hatTable);
    page.compareTableString(
      'test123',
      require('../../../fixtures/mocks/users/user-list.json'),
    );
    page.actionsOfUser.should('exist').and('be.visible');
    page.deleteUser.should('exist').and('be.visible');
    page.pagination.should('not.be.visible');
  })

  it("ModalWindow", () => {
    const create = page.viewCreate
    create.title.should('have.attr', 'open');
    create.title.should('have.attr', 'label', 'Пользователь');
    create.header.should('contain.text', 'ФИО');
    for (let i = 0; i < mass.length; i++) {
      create.typeValue(mass[i], 'user', 'TestValue');
      if (mass[i] == 'password' || mass[i] == 'username') {
        create
          .inputValue(mass[i], 'user')
          .should('exist')
          .and('be.visible')
          .find('span[slot="label"]')
          .should('contain', names[i]);
        continue;
      } else if (mass[i] == 'email') {
        create
          .inputValue(mass[i], 'user')
          .shadow()
          .find('input')
          .type('@bk.ru', { force: true })
      }
      create
        .inputValue(mass[i], 'user')
        .should('exist')
        .and('be.visible')
        .shadow()
        .find('label[part="form-control-label"]')
        .should('contain', names[i]);
    }
    create.role.should('contain.text', 'Роль в системе');
    create.chooseRoleHolder.should('exist').and('be.visible');
    create.roleToggler.should('exist').and('be.visible');
    create.chooseRoleInput.focus();
    create.roleMenu.should('exist').and('be.visible');
    create.chooseRoleNone.click();
    create.superUserCheckbox.check({ force: true });
    create.chooseRoleHolder.should('be.disabled');
    create.superUser.should('have.attr', 'checked');
    create.nameOfGroup.should('exist').and('be.visible');
    create.addGroup.should('exist').and('be.visible');
    create.cancel.should('exist').and('not.be.disabled');
    create.create.should('exist').and('not.be.disabled');
    create.createButton.click({ force: true });
    notify.notification(create.notification, 'Пользователь успешно создан');
  })
  it ('Change settings of user', () => {
    const change = page.settingOfUser
    change.title.should('have.attr', 'label', 'Пользователь')
    change.login.should('have.value', 'test123')
    change.password.should('have.value', '')
    change.createButton.click({force:true})
    notify.notification(change.notification, 'Пользователь успешно изменен')
  })
  it ('Delete User', () => {
    page.deleteUser.should('exist').and('be.visible')
    const del = page.deleteUserAction
    del.deleteUserTitle.should('contain.text', 'Удалить пользователя?')
    del.deleteUserDescription.should('contain.text', 'Вы уверены, что хотите удалить пользователя?')
    del.deleteUserApply.should('exist').and('be.visible')
    del.deleteUserApply.click()
    notify.notification(del.notification, 'Пользователь успешно удален')
  })
})