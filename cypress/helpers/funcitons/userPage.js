import {UserModal} from '../funcitons/Modal'

class UserPage {
    get head() {
        return cy.get('core-header')
    }
    get title() {
        return this.head.find('h1')
    }
    get viewCreate() {
        this.addUser.click();
        return new UserModal();
    }
    get addUser() {
        return cy.get('div[class="controls center"]').find('sl-button')
    }
    get table() {
        return cy.get('core-table')
    }
    get headOfTable() {
        return this.table.find('thead')
    }
    checkHeadRows(headList) {
        headList.forEach(element => {
            this.table.contains('th', element).should('exist').and('be.visible')
        });
    }
    compareTableString(searchString, fixt) {
        cy.contains('td', searchString).parent().find('td').as('cells');
        cy.get('@cells')
            .eq(1)
            .find('sl-avatar')
            .shadow()
            .find('.avatar__initials')
            .should(
                'contain',
                fixt.rows[0].first_name.charAt(0) + 
                    fixt.rows[0].last_name.charAt(0),
            );
        [
            [2, fixt.rows[0].last_name],
            [3, fixt.rows[0].first_name],
            [4, fixt.rows[0].middle_name],
            [5, fixt.rows[0].username],
            [6, fixt.rows[0].email],
        ].forEach((p) => {
            cy.get('@cells').eq(p[0]).should('contain', p[1]);
        });
    }
    get pagination() {
        return cy.get('core-pagination')
    }
    get checkBox() {
        return cy.get('core-table-checkbox').find('sl-checkbox').first()
    }
    get actionsOfUser() {
        return cy.get('td[class="actions"]')
    }
    get settingOfUser() {
        this.actionsOfUser.find('core-action[type="setup"]').first().click()
        return new UserModal()
    }
    get deleteUser() {
        return this.actionsOfUser.find('core-action[type="delete"]').children().shadow().find('button').first()
    }
    get deleteUserAction() {
        this.deleteUser.click()
        return new UserModal()
    }
}
export default UserPage