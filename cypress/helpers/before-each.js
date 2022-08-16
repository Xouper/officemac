import { auth } from './auth';
import { MockService } from './mock';

export function beforeEachTest(page) {
    new MockService().setSuccessRequests();
    if (page != '/auth') auth();
    cy.visit(page);
}