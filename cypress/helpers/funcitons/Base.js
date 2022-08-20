export class Base {

    inputValue(value, form) {
        return cy.get(`.${form}-form`).find(`sl-input[name = ${value}]`);
    }

    typeValue(name, form, value) {
        return this.inputValue(name, form).shadow().find('input').type(value);
    }
    get notification() {
        return cy.get('.sl-toast-stack').find('sl-alert');
    }

}