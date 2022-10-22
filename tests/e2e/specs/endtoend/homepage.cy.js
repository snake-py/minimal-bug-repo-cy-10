import '@percy/cypress';

describe(`Page: LoginPage  `, () => {
    beforeEach(() => {
        const settings = /(.*)\/settings\/*/;
        cy.visit('/');
        cy.window().then((win) => {
            app = win.app;
        });

        it('should have a login button', () => {
            console.log('should have a login button');
        });
    });
});
