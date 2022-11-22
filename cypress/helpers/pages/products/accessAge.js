export class AccessAge {
    get accessWindow() {
        return cy.get('app-user-access').find('sl-dialog')
    }
    get ageWarning() {
        return this.accessWindow.find(".message-warning")
    }
    get ageWarningDescription() {
        return this.accessWindow.find('.message-description')
    }
    get number18() {
        return this.accessWindow.find('.warning')
    }
    get accessButtons() {
        return this.accessWindow.find('.wrapper-buttons')
    }
    get slButtonEntrance() {
        return this.accessButtons.find('.button-entrance')
    }
    get buttonEntrance() {
        return this.slButtonEntrance.shadow().find('button')
    }
    get slButtonExist() {
        return this.accessButtons.find('.button-exit')
    }
    get buttonExist() {
        return this.slButtonExist.shadow().find('button')
    }
}