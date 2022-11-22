let at;

export function auth() {
    if (at) {
        window.localStorage.setItem('at', at);
        return;
    }

    const { username, password } = {
        username: 'ustinov@mail.ru',
        password: '111111',
    };

    cy.request('POST', 'api/v1/admin/auth/sign_in', {
        username: username,
        password: password,
    }).then((response) => {
        at = response.body.bearer_token;
        auth();
    });
}