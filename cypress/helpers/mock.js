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
            [
                'POST',
                '/api/*/user/',
                { fixture: '../fixtures/mocks/users/user-create.json' },
            ],

            [
                'PUT',
                '/api/*/user/*/',
                { fixture: '../fixtures/mocks/users/edit-user.json' },
            ],
            ['DELETE', '/api/*/user/*/', { statusCode: 200 }],
            ['DELETE', '/api/*/user/?*', { statusCode: 200 }],
        ]
    }

}