export class MockService {
    constructor() {
        this.successMocks.forEach((item) => {
            cy.intercept(...item);
        });
    }
    setSuccessRequests() {
        this.successMocks.forEach((item) => {
            cy.intercept(...item);
        });
    }
    get successMocks() {
        return [
            [
                'GET',
                '/api/*/user/?*',
                { fixture: '../fixtures/mocks/users/user-list.json' },
            ],
        ]
    }

}