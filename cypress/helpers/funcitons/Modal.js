export class UserModal {
    get modalWnidow() {
        return cy.get('app-user-modal')
    }
    get title() {
        return this.modalWnidow.children().first()
    }
    get header() {
        return cy.get('div[class="header"]').find('p')
    }
    get userForm() {
        return cy.get('.user-form')
    } 
    get login() {
        return this.userForm.find('sl-input[name="username"]').shadow().find('.input__control')
    }
    set login(str) {
        this.login.type(str)
    }
    get loginText() {
        return this.userForm.find('sl-input[name="username"]').find('span')
    }
    get password() {
        return this.userForm.find('sl-input[name="password"]').shadow().find('.input__control')
    }
    set password(str) {
        this.password.type(str, {force:true})
    }
    get passwordEye() {
        return this.password.parent().find('button')
    }
    get passwordText() {
        return this.userForm.find('sl-input[name="password"]').find('span')
    }
    get email() {
        return this.userForm.find('sl-input[name="email"]').shadow().find('slot')
    }
    get lastname() {
        return this.userForm.find('sl-input[name="last_name"]').shadow().find('slot')
    }
    get firstname() {
        return this.userForm.find('sl-input[name="first_name"]').shadow().find('slot')
    }
    get middleName() {
        return this.userForm.find('sl-input[name="middle_name"]').shadow().find('slot')
    }
    get role() {
        return this.userForm.find('p[class="title"]')
    }
    get chooseRole() {
        return this.userForm.find('sl-input[slot="trigger"]')
    }
    get chooseRoleHolder() {
        return this.chooseRole.shadow().find('input[placeholder="Выберите роль"]')
    }
    get roleToggler() {
        return this.chooseRole.find('sl-icon[class="toggler"]')
    }
    get superUser() {
        return this.userForm.contains('Суперпользователь')
    }
    get superUserCheckbox() {
        return this.superUser.shadow().find('input[type="checkbox"]')
    }
    get nameOfGroup() {
        return this.modalWnidow.contains('Нет группы')
    }
    get addGroup() {
        return cy.contains('Добавить в группу')
    }
    get modalActions() {
        return cy.get('app-modal-actions')
    }
    get cancel() {
        return this.modalActions.contains('Отменить')
    }
    get add() {
        return this.modalActions.contains('Создать')
    }
}
export default UserModal