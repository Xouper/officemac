import {auth} from './autologin'
export function beforeEachPositive(page) {
    if (page != '') auth();

    cy.visit(page);
    cy.wait(100);
}